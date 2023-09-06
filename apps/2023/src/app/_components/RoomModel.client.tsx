"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

import useAnimateWrapper from "@common/hooks/useAnimateWrapper";

const RESOURCE_PATH = "/model/portfolio_room.glb";

useGLTF.preload(RESOURCE_PATH);

/**
 * @constant camera_position [10, 6, 10]
 * @constant camera_near 0.1
 */
const RoomModel = () => {
  const { scene, animations } = useGLTF(RESOURCE_PATH);
  const { actions } = useAnimateWrapper(animations, scene);

  // room 모델 착륙
  const _onLandAnimate = () => {
    const landClips = Object.entries(actions).filter(([key]) => key.includes("land"));

    landClips.forEach(([, clip]) => {
      clip
        ?.setLoop(THREE.LoopOnce, 1)
        .play()
        .onFinish(() => {
          clip.stop();
        });
    });
  };

  // room 모델 이륙 - 활공 유지
  const _onTakeoffAnimate = () => {
    const takeoffClips = Object.entries(actions).filter(([key]) => key.includes("takeoff"));
    const flyingClips = Object.entries(actions).filter(([key]) => key.includes("flying"));

    takeoffClips.forEach(([key, clip]) => {
      const flyingClip = flyingClips.find(
        ([key2]) => key.split("_")[0] === key2.split("_")[0]
      )?.[1];
      clip
        ?.setLoop(THREE.LoopOnce, 1)
        .play()
        .onFinish(() => {
          clip.stop();
          console.log(1213);
          flyingClip?.play();
        });
    });
  };

  const armatureInitAnimate = () => {
    actions.armature_falling
      ?.setLoop(THREE.LoopOnce, 1)
      .fadeIn(0.05)
      .play()
      .onFinish(() => {
        actions.armature_falling?.stop();
        actions.armature_typing?.setDuration(1.5).play();
      });
  };

  useEffect(() => {
    if (!actions) return;
    armatureInitAnimate();
  }, [actions]);

  return <primitive object={scene} scale={1} />;
};

export default RoomModel;
