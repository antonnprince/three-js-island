/* eslint-disable no-unused-vars */
import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"
import { Loader } from "../components/Loader"
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from "../models/Bird"
import Plane from "../models/Plane"
//packages needed - three/fiber and three/drei
const Home = () => {

        const [isRotating, setIsRotating] = useState(false);
    const adjustIslandForScreenSize =()=>{
        let screenScale = null
        let screenPosition = [0, -6.5, -43]
        let rotation = [0.1, 4.7, 0]
        if(window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9]
        }

        else {
            screenScale = [1, 1, 1]
           
        }

        return [screenScale, screenPosition, rotation]
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();    

    const adjustPlaneForScreenSize =()=>{
        let screenScale, screenPosition;
        if(window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5]
            screenPosition=[0, -1.5, 0]
        }

        else {
            screenScale = [3, 3, 3]
            screenPosition=[0, -4, -4]
           
        }

        return [screenScale, screenPosition]
    }

    const [planeScale, planePosition] = adjustPlaneForScreenSize();
  
        return (
    <section className="w-full h-screen relative">
    {/*objects nearer than 0.1 and farer than 1000 wont be rendered */}   
    {/*3d scene rendered here */}
    <Canvas className={`w-full h-screen bg-transparent ${isRotating?'cursor-grabbing' : 'cursor-grab'}`}   
   camera={{near: 0.1,far: 1000}}
    >
        {/*Loader component shown before 3d model rendered */}
        <Suspense fallback={<Loader/>}>
            {/* Simulates light coming from distant source eg: sun */}
            <directionalLight position={[1,1,1]} intensity={2} />
            {/* illuminates all object on screen equally without casting shadows */}
            <ambientLight intensity={0.5} />
           {/* emits light  in all directions from a single point*/}
            {/*<pointLight /> */}
            {/* similar to pointlight, emits light in one direction in shape of a cone
            an angle provided 
             <spotLight />
             */}
           {/* illuminates scene with a gradient */}
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
            <Bird />
            <Sky />
            <Island 
                position = {islandPosition}
                scale = {islandScale}
                rotation={islandRotation}
            setIsRotating={setIsRotating}
            />
            <Plane
            planeScale={planeScale} 
            planePosition={planePosition}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
             />
        </Suspense>
    </Canvas>
    </section>
  )
}

export default Home
