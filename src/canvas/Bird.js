import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader";
import { OrbitControls, Preload, SpotLight, useGLTF } from "@react-three/drei";


const Bird = () => {
  const bird = useGLTF("./rainbow/scene.gltf");

  return (
    <primitive object={bird.scene} position-y={0} rotation-y={0}/>
  );
};

const BirdCanvas = () => {
  return (
    <Canvas
      
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
    
        fov: 40,
        near: 0.1,
        far: 200,
        position: [ -4, 3, 6],
      }}
    >
   
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        autoRotate 
        enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Bird
        />
        <ambientLight intensity={1}/>
        <pointLight position={[-3,2,4]} />


        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default BirdCanvas;