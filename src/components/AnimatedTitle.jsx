import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

function AnimatedTitle({title, containerClass}) {

  const containerRef = useRef(null)
  useGSAP(()=>{

      gsap.from(containerRef.current, {
        transform: 'translate3d(107.977px, 51.303px, -59.3966px) rotateY(50deg) rotateX(-20deg)',
        transformOrigin: '50% 50% -150px',
        perspective: 1000,
        duration: 0.7,       
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play none none reverse",
        }
      });

      gsap.from('span', {
        opacity: 0,
        stagger: 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play none none reverse",
        }
      })
  }, {scope: containerRef})  


  return (
    <div 
    ref={containerRef}
    className={`uppercase text-center font-zentry my-10 special-font ${containerClass}`} dangerouslySetInnerHTML={{__html: title}}>
    </div>
  )
}

export default AnimatedTitle