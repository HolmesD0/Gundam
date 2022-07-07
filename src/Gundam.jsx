import React, { useRef, useEffect, Suspense } from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Canvas, useLoader } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'

function Camera(props) {
    const ref = useRef()
	const obj = useLoader(OBJLoader, "Gundam.obj")
	useEffect(() => {
		for (let i=0; i<props.part.length; i++) obj.children[props.part[i]].material.color = props.color
		// eslint-disable-next-line
	}, [props.color])
    return (
        <PerspectiveCamera
            {...props}
            ref={ref}>
            <primitive position={[0, -2.25, 0]} rotation={[0, 0, 0]} scale={0.2} object={obj} />
        </PerspectiveCamera>
    )
}

export default function Gundam(props) {
    return (
        <Canvas onContextMenu={(event) => event.preventDefault()}>
            <Suspense fallback={null}>
				<ambientLight color={props.shadow} />
				<pointLight position={[10, 10, 10]} />
				<Camera position={[0, 0, 0]} rotation={[0, 0, 0]} part={props.part} color={props.color} />
				<OrbitControls />
            </Suspense>
        </Canvas>
    )
}

/* OrbitControls <OrbitControls /> */
