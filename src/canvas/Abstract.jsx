import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader";
import { OrbitControls, Preload, SpotLight, useGLTF } from "@react-three/drei";


const Abstract = () => {
  const abstract= useGLTF("./rainbow/scene.gltf");

  return (
    <primitive object={abstract.scene} position-y={0} rotation-y={0}/>
  );
};

const AbstractCanvas = () => {
  return (
    <Canvas
      
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
    
        fov: 40,
        near: 0.1,
        far: 200,
        position: [ -4, 3, 3],
      }}
    >
   
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        shadow
        autoRotate
        autoRotateSpeed={1}
        enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Abstract
        />
        <ambientLight intensity={1}/>
        <pointLight position={[-20,0,0]} />
        <pointLight position={[-20,-20,-20]} />
        <pointLight position={[0,-20,-20]} />
       


        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default AbstractCanvas;