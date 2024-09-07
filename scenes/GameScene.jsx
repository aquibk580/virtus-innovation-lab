"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Vehicle from "@/components/Vehicle";
import FallingShapes from "@/components/FallingShapes";
import GameOver from "@/components/GameOver";
import { Physics } from "@react-three/rapier";

const GameScene = () => {
  const [isGameOver, setGameOver] = useState(false);

  const handleGameOver = () => setGameOver(true);

  return (
    <Canvas className="bg-black">
      <Suspense fallback={null}>
        <Physics>
          {!isGameOver && (
            <>
              <Vehicle onGameOver={handleGameOver} />
              <FallingShapes />
            </>
          )}
        </Physics>
      </Suspense>
    </Canvas>
  );
};

export default GameScene;
