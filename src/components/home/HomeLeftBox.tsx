import React, { useRef, Suspense } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Model = (props: any) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/bitcoinModel/scene.gltf");
  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          {/* @ts-ignore */}
          <mesh geometry={nodes.mesh_0.geometry} material={materials.None} />
        </group>
      </group>
      <OrbitControls />
    </>
  );
};

useGLTF.preload("/models/bitcoinModel/scene.gltf");

const HomeLeftBox: React.FC = () => {
  return (
    <div className="HomeLeftBox">
      <h1>Home Left Box</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, culpa
        est. Explicabo voluptatum, repellat sed debitis laudantium eum! Facilis
        distinctio aliquid modi aliquam repellat laudantium dignissimos cum
        asperiores placeat reprehenderit.
      </p>
      <div className="ModelBox">
        <Canvas id="Canvas" shadows>
          <ambientLight intensity={0.5} />
          <pointLight position={[100, 500, 500]} intensity={2} />
          <directionalLight
            castShadow
            position={[0, 0, 0]}
            shadow-camera-far={50}
          />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default HomeLeftBox;
