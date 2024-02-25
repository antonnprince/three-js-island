import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Loader } from "../components/Loader"


//packages needed - three/fiber and three/drei
const Home = () => {
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
        </Suspense>
    </Canvas>
    </section>
  )
}

export default Home
