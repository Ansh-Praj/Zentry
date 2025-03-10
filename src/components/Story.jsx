import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import TiltContainer from './TiltContainer'

function Story() {

    const welcomeTitle1 = useRef()
    const welcomeTitle2 = useRef()
    const welcomeTitle3 = useRef()
    const welcomeTitle4 = useRef()

    useGSAP(()=>{
        gsap.from([welcomeTitle1.current, welcomeTitle2.current, welcomeTitle3.current, welcomeTitle4.current], {
            opacity: 0,
            stagger: 0.07,
            ease: 'none',
            scrollTrigger: {
              trigger: [welcomeTitle1.current, welcomeTitle2.current, welcomeTitle3.current, welcomeTitle4.current],
              start: 'bottom bottom-=100px',
              end: 'center center',
              toggleActions: "play none none reverse",
            }
        })
        
    }, [])



  return (
    <div id='story' className='w-full bg-[#000000] py-32 -mt-1 text-center overflow-x-hidden'>
        <div className='text-[10px] space-x-1'>
          <span
          ref={welcomeTitle1}
          className='uppercase font-general opacity-100    font-bold'>The</span> <span
          ref={welcomeTitle2}
          className='uppercase font-general opacity-100   font-bold'>open</span> <span
          ref={welcomeTitle3}
          className='uppercase font-general opacity-100   font-bold'>ip</span> <span
          ref={welcomeTitle4}
          className='uppercase font-general opacity-100   font-bold'>universe</span>
        </div>

        <AnimatedTitle title="<span>The</span> <span class='special-font'>St<b>o</b>ry</span> <span>of</span> <br /> <span>A</span> <span>hidden</span> <span>real<b>m</b></span>" containerClass="text-6xl  mx-auto w-[80%] font-bold leading-[0.9] lg:leading-[0.8] lg:w-[65%] lg:text-8xl"  />

        <TiltContainer defaultTilt='rotateX(11deg) rotateY(26deg) scale3d(1, 1, 1)' tiltSpeed={30} hoverControl={false} containerClass="w-[50%] h-[33vh] lg:h-[60vh] overflow-hidden mx-auto top-[-6rem] perspective-[300px] rotate-x-[11deg] rotate-y-[26deg] mix-blend-difference">

            <div className='relative w-screen h-[50vh]'>
              <img 
              className='absolute left-0 lg:top-[-50%] lg:left-[-20%]'
              src="img/entrance.webp" alt="" />
            </div>

        </TiltContainer>

      <div className=' text-sm font-medium w-80 space-y-10 mx-auto lg:ml-auto lg:mr-36 lg:text-left'>
        <p>Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities.</p>

        <button className='bg-[#DFDFF0] text-[#000000] px-6 py-3 rounded-4xl text-xs font-bold cursor-pointer'>DISCOVER PROLOGUE</button>
      </div>

    </div>
  )
}

export default Story