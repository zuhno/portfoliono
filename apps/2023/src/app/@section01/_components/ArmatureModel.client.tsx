"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

import useAnimateWrapper from "@common/hooks/useAnimateWrapper";

const RESOURCE_PATH = "/model/portfolio_armature.glb";

useGLTF.preload(RESOURCE_PATH);

/**
 * @constant camera_position [10, 6, 10]
 * @constant camera_near 0.1
 */
const RoomModel = () => {
  const { scene, animations } = useGLTF(RESOURCE_PATH);
  const { actions } = useAnimateWrapper(animations, scene);

  const onRotation = () => {
    actions.armature_rotation?.play();
  };

  useEffect(() => {
    onRotation();
  }, []);

  return <primitive object={scene} scale={1} />;
};

export default RoomModel;
