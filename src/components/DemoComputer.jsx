import React, { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';

const images = [
  '/path/to/your/ekran1.png',
  '/path/to/your/screen-image2.jpg',
  '/path/to/your/screen-image3.jpg'
];

const DemoComputer = ({ currentImageIndex, ...props }) => {
  const { nodes, materials } = useGLTF('/models/computer_monitor_169_low_poly_game_ready.glb');
  const [screenTexture, setScreenTexture] = useState(null);

  useEffect(() => {
    const loader = new TextureLoader();
    loader.load(images[currentImageIndex], (texture) => {
      setScreenTexture(texture);
    });
  }, [currentImageIndex]);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Monitor_01_A}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Monitor_01_B}
        >
          {screenTexture && <meshStandardMaterial attach="material" map={screenTexture} />}
        </mesh>
      </group>
    </group>
  );
};

export default DemoComputer;