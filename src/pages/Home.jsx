/* eslint-disable no-unused-vars */
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Loader } from "../components/Loader"
import Island from '../models/Island'

//packages needed - three/fiber and three/drei
const Home = () => {

    const adjustIslandForScreenSize =()=>{
        let screenScale = null
        let screenPosition = [0, -6.5, -43]

        if(window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9]
        }

        else {
            screenScale = [1, 1, 1]
           
        }

        return [screenScale, screenPosition]
    }

        const [islandScale, islandPosition] = adjustIslandForScreenSize();
  return (
    <section className="w-full h-screen relative">
    {/*objects nearer than 0.1 and farer than 1000 wont be rendered */}   
    {/*3d scene rendered here */}
    <Canvas className="w-full h-screen bg-transparent"   
   camera={{near: 0.1,far: 1000}}
    >
        {/*Loader component shown before 3d model rendered */}
        <Suspense fallback={<Loader/>}>
            <directionalLight />
            <ambientLight />
            <pointLight />
            <spotLight />
            <hemisphereLight />

            <Island 
                position = {islandPosition}
                scale = {islandScale}
            />
        </Suspense>
    </Canvas>
    </section>
  )
}

export default Home
