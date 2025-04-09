import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'

function App() {
  const [count, setCount] = useState(0)

  const Cube=(props)=>{
    const {position,size,color}=props
    const ref=useRef()

    useFrame((state,delta)=>{
      ref.current.rotation.x += delta
      ref.current.rotation.y += delta
      ref.current.rotation.z += delta
      
    })
    return (
      <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
        <meshStandardMaterial color={color}  />
     
    </mesh>
    )
  }

  return (
    <>
     
      <Canvas>
        <directionalLight position={[0,0,3]} intensity={0.8} />
       <ambientLight intensity={0.8}/>

        {/* <group position={[0,-1,0]}>
        <Cube position={[1,0,0]} size={[1,1,1]} color={"lime"} />
        <Cube position={[-1,0,0]} size={[1,1,1]} color={"orange"} />
        <Cube position={[-1,2,0]} size={[1,1,1]} color={"hotpink"} />
        <Cube position={[1,2,0]} size={[1,1,1]} color={"blue"} />
        </group> */}
       <Cube position={[0,0,0]} size={[1,1,1]} color={"orange"} />
      </Canvas>
     
    </>
  )
}

export default App
