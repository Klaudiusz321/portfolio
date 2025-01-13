// SpinningBox.jsx
import React, { useRef, useState } from 'react'
import { useCursor, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function SpinningBox({ scale, ...props }) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useCursor(hovered)

  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta
    ref.current.rotation.z += delta
  })

  return (
    <mesh
      {...props}
      ref={ref}
      scale={
        clicked
          ? [scale * 1.4, scale * 1.4, scale * 1.4]
          : [scale * 1.2, scale * 1.2, scale * 1.2]
      }
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      {/* Main "K" */}
      <Text
        position={[0, 0, 0]}
        fontSize={2}
        color={ 'white' }
        anchorX="center"
        anchorY="middle"
        scale={[1, 1, 100]} // Increased z-scale for thickness
      >
        K
      </Text>
     

      {/* Optional: Duplicate "K" slightly offset along Z-axis for better thickness */}
      {/* Uncomment the block below if you want a thicker effect */}
      {/*
      <Text
        position={[0, 0, -0.1]} // Slight offset along z-axis
        fontSize={2}
        color={hovered ? 'hotpink' : 'indianred'}
        anchorX="center"
        anchorY="middle"
        scale={[1, 1, 1.5]}
      >
        K
      </Text>
      */}
    </mesh>
  )
}
