import React from 'react'
import {Canvas} from "@react-three/fiber"
import { workExperiences } from '../constants'
import { Suspense } from 'react'
import Me from '../components/Me'
import CanvasLoader from '../components/CanvasLoader'
import { OrbitControls } from '@react-three/drei'

const Experience = () => {
  return (
    <section className='c-space my-20'>
        <div className='w-full text-white-600'>
            <h3 className='head-text'>
                My Experience
            </h3>
            <div className='work-container'>
                <div className='work-canvas'>
                    <Canvas>
                        <ambientLight intensity={7} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <directionalLight position={[10, 10, 10]} intensity={1} />
                        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                        <Suspense fallback={<CanvasLoader />}>
                            <Me position-y={-3} scale={3.5}/>
                        </Suspense>
                    </Canvas>
                </div>
                <div className='work-content'>
                    <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
                        {workExperiences.map(({id, icon, name, pos, duration, tittle})=>(
                            <div key={id} className='work-content_container group'>
                                <div className='flex flex-col h-full justify-start items-center py-2'>
                                    <div className='work-content_logo'>
                                        <img src={icon} alt="logo" className='w-full h-full' />
                                    </div>
                                    <div className='work-content_bar' />
                                </div>
                                <div className='sm:px-5 px-2.5 py-5'> 
                                    <p className='font-bold text-white-xl'>
                                        {name}
                                    </p>
                                    <p className='mb-5 text-sm'>
                                        {pos} -- {duration}
                                    </p>
                                    <p className='group-hover:text-white transition  ease-in-out duration-500'>
                                        {tittle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience