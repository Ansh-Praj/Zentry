import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)


function TiltContainer({children, containerClass, tiltSpeed, defaultTilt, hoverControl = true}) {

  const [transformStyle, setTransformStyle] = useState('')

    const containerRef = useRef()

    useEffect(()=>{

      
      
      containerRef.current.addEventListener('mousemove', (e)=>{
        const containerSize = containerRef.current.getBoundingClientRect()
        const mousePos = {x:e.offsetX - containerSize.width/2, y: e.offsetY - containerSize.height/2}
        setTransformStyle(`rotateX(${mousePos.y/tiltSpeed}deg) rotateY(${mousePos.x/tiltSpeed}deg) scale3d(0.94, 0.94, 0.94)`)
        
        // containerRef.current.style.transform = `rotateX(${mousePos.x/-70}deg) rotateY(${mousePos.y/-70}deg)`
        
      })

      containerRef.current.addEventListener('mouseenter', ()=>{
        if(hoverControl) containerRef.current.querySelector('video').play()
      })
      
      containerRef.current.addEventListener('mouseleave', (e)=>{
        // containerRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`
        if(defaultTilt) {

          setTransformStyle(defaultTilt)
        } else {

          setTransformStyle(`rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`)
        }
        if(hoverControl) containerRef.current.querySelector('video').pause()
      })

    }, [])

    useGSAP(()=>{
      gsap.from(containerRef.current, {
        rotateX: '-31deg',
        opacity: 0,
        duration: 0.4,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          toggleActions: 'play none none reverse', 
        },
        onStart: ()=> defaultTilt && setTransformStyle(defaultTilt)
      })
    }, [])
    

  return (
    <div ref={containerRef} 
    style={{transform: transformStyle}}
    className={`duration-200  rounded-md cursor-grab relative overflow-hidden flex flex-col justify-between p-4 lg:p-6 ${containerClass}`}>

      {children}
      
    </div>
  )
}

export default TiltContainer