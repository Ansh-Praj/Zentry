import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import TiltContainer from './TiltContainer'
gsap.registerPlugin(ScrollTrigger)

function About() {

  const welcomeTitle1 = useRef()
  const welcomeTitle2 = useRef()
  const welcomeTitle3 = useRef()


  useGSAP(()=>{
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: 'center+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      }
    })
    
    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      transformOrigin: 'center center',
      borderRadius: 0
    })

  
    gsap.from([welcomeTitle1.current, welcomeTitle2.current, welcomeTitle3.current], {
      opacity: 0,
      stagger: 0.07,
      ease: 'none',
      scrollTrigger: {
        trigger: [welcomeTitle1.current, welcomeTitle2.current, welcomeTitle3.current],
        start: 'bottom bottom-=100px',
        end: 'center center',
        toggleActions: "play none none reverse",
      }
    })

    // img container rotate
    gsap.from('#clip', {
      rotateX: '90deg',
      duration: 1,
      scrollTrigger: {
        trigger: '#clip',
        start: 'top bottom',
        toggleActions: "play none none reverse",
      }
    })
    //img stones
    gsap.from('#clip > img', {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '#clip',
        start: 'center-=100 bottom',
        toggleActions: "play none none reverse",
      }
    })



  }, [])

  return (
    <div className='min-h-screen w-full mt-16 text-[#000000] overflow-x-hidden'>
      <div className='!relative flex flex-col items-center gap-5 '>

        <div>
          <span
          ref={welcomeTitle1}
          className='uppercase font-general opacity-100   text-sm font-bold'>Welcome</span> <span
          ref={welcomeTitle2}
          className='uppercase font-general opacity-100  text-sm font-bold'>to</span> <span
          ref={welcomeTitle3}
          className='uppercase font-general opacity-100  text-sm font-bold'>zentry</span>
        </div>


        <div>
          {/* <AnimatedTitle title="Discover the w<b>o</b>rld's <br />largest shared <b>a</b>dventure" containerClass="text-8xl font-bold leading-[0.8]"  /> */}
          <AnimatedTitle title="<span>Disc<b>o</b>ver</span> <span>the</span> <span>world's</span> <span>largest</span> <span>shared</span> <span><b>a</b>dventure</span>" containerClass="text-5xl  mx-auto w-[80%] font-bold leading-[0.9] lg:leading-[0.8] lg:w-[65%] lg:text-8xl" />
          

        </div>

        <div className='absolute text-center bottom-[50%] lg:bottom-[55%]'>
          <p>The  Metagame begins-your life, now an epic MMORPG</p>
          <p>Zentry is the unified play layer that bridges players, agentic AI, and blockchains, creating a new economic paradim.</p>
        </div>

        {/* h-dvh */}
        <div className='h-screen w-screen overflow-hidden' id='clip'> 
          <img className='z-30 absolute h-full w-full object-cover lg:-top-[10%]' src="img/stones.webp" alt="" />
          <div className='mask-clip-path w-80 h-[65vh] rounded-lg z-20 absolute left-1/2 top-0 -translate-x-1/2 overflow-hidden'>
            <img src="img/about.webp" alt="Background" 
            className='object-cover w-full h-screen object-center'
            />
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default About