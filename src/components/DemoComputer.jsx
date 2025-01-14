import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';


const DemoComputer = ({ screenshot, ...props }) => {
  const { nodes, materials } = useGLTF('/models/computer_monitor_169_low_poly_game_ready.glb');
  const [screenTexture, setScreenTexture] = useState(null);

  useEffect(() => {
    if (screenshot) {
      const loader = new TextureLoader();
      loader.load(screenshot, (texture) => {
        setScreenTexture(texture);
      });
    }
  }, [screenshot]);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {/* Obudowa monitora */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Monitor_01_A}
        />

        {/* Ekran monitora */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Monitor_01_B}
        >
          {screenTexture && <meshStandardMaterial map={screenTexture} />}
        </mesh>
      </group>
    </group>
  );
};

export default DemoComputer;
