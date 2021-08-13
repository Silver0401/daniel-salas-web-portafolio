import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import dynamic from "next/dynamic";

function Model(props: any) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/bitcoinModel/scene.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {/* @ts-ignore */} {/* prettier-ignore */}
        <mesh geometry={nodes.mesh_0.geometry} material={materials.None} />
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");

// @ts-ignore
const Suspense = dynamic(() => import("react"), {
  ssr: false,
});

const IndexLeftBox: React.FC = () => {
  return (
    <div className="IndexLeftBox">
      <Suspense>
        <Model />
      </Suspense>
    </div>
  );
};

export default IndexLeftBox;
