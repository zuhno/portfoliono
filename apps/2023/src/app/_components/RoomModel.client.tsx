"use client";

import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

import useAnimateWrapper from "@common/hooks/useAnimateWrapper";

const RESOURCE_PATH = "/portfolio_room.glb";

useGLTF.preload(RESOURCE_PATH);

const RoomModel = () => {
  useThree(({ camera }) => {
    camera.rotation.set(0, 0, 1000);
  });

  const { scene, animations } = useGLTF(RESOURCE_PATH);
  const { actions } = useAnimateWrapper(animations, scene);

  const roomAnimate = () => {
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
    setTimeout(() => {
      console.log(actions.armature_falling);
      actions.armature_falling
        ?.setLoop(THREE.LoopOnce, 1)
        .play()
        .onFinish(() => {
          roomAnimate();
          actions.armature_falling?.stop();
          actions.armature_typing?.setDuration(1.5).play();
        });
    }, 0);
  };

  useEffect(() => {
    if (!actions) return;
    armatureInitAnimate();
  }, [actions]);

  return (
    <>
      <primitive object={scene} scale={1} />;
    </>
  );
};

export default RoomModel;
