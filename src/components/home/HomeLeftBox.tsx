import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import BitcoinModel from "../models/bitcoin";

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
            <BitcoinModel />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default HomeLeftBox;
