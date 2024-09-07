"use client";

import { useRapier } from "@react-three/rapier";
import { useEffect } from "react";

const GameOver = ({ vehicleRef, onGameOver }) => {
  const { world } = useRapier();

  useEffect(() => {
    if (world && vehicleRef.current) {
      const shapes = world.getRigidBody(); 
      const vehicle = vehicleRef.current;

      console.log("Shapes:", shapes);
      console.log("Vehicle:", vehicle);

      if (shapes?.length && vehicle) {
        shapes.forEach((shape) => {
          const distance = vehicle.position.distanceTo(shape.position);
          if (distance < 1) {  
            console.log("Collision detected!");
            onGameOver();
          }
        });
      }
    } else {
      console.log("World is not initialized or vehicleRef is null");
    }
  }, [world, vehicleRef]);

  return null;
};

export default GameOver;
