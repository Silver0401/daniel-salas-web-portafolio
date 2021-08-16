import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import BitcoinModel from "../models/bitcoin";

const HomeLeftBox: React.FC = () => {
  return (
    <div className="HomeLeftBox">
      <div className="ModelBox">
        <Canvas id="Canvas" shadows camera={{ position: [0, 0, 60], fov: 100 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[250, 250, 250]} intensity={2} />
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
