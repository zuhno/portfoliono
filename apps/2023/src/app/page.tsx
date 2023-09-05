"use client";

import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import RoomModel from "./_components/RoomModel.client";

// import homeStyles from "./_styles/home.module.scss";

export default function Home() {
  return (
    <div
      style={{
        width: "50dvw",
        height: "50dvh",
        outline: "none",
      }}
    >
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera
            far={1000}
            fov={30} // 시야각 조정
            makeDefault // 이 카메라를 기본 카메라로 설정
            near={0.1}
            position={[10, 6, 10]} // 카메라의 초기 위치를 조정
          />
          <RoomModel />
          <OrbitControls
            enablePan={false}
            enableRotate={false}
            // minPolarAngle={Math.PI / 2} // 최소 x,y 축
            // maxPolarAngle={Math.PI / 2} // 최대 x,y 축
            enableZoom={false}
          />
          <Environment preset="forest" />
        </Suspense>
      </Canvas>
    </div>
  );
}
