import React, { useEffect, useRef } from 'react'
import TiltContainer from './TiltContainer'
import AnimatedTitle from './AnimatedTitle'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function Contact() {

    const contactImg1 = useRef()
    const contactImg2 = useRef()

    useGSAP(()=>{
        gsap.from(contactImg1.current, {
            y: '-200px',
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '#contact',
                start: 'center bottom',
                toggleActions: 'play none none reverse',
            }
        })
        gsap.from(contactImg2.current, {
            y: '200px',
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '#contact',
                start: 'center bottom',
                toggleActions: 'play none none reverse',
            }
        })

        gsap.to('#story', {
            backgroundColor: '#DFDFF0',
            color: '#000',
            duration: 0.1,
            scrollTrigger: {
                trigger: '#contact',
                start: 'top+=100 bottom',
                toggleActions: 'play none none reverse',
            }
        })
        gsap.to('#story button', {
            backgroundColor: '#000',
            color: '#DFDFF0',
            duration: 0.1,
            scrollTrigger: {
                trigger: '#contact',
                start: 'top+=100 bottom',
                toggleActions: 'play none none reverse',
            }
        })
        gsap.to('#contact', {
            backgroundColor: '#DFDFF0',
            duration: 0.1,
            scrollTrigger: {
                trigger: '#contact',
                start: 'top+=100 bottom',
                toggleActions: 'play none none reverse',
            }
        })

    })


    // useEffect(()=>{

    //     const isMobile = window.innerWidth < 768

    //     const ctx = gsap.context(()=>{

    //         if(isMobile){

    //             gsap.to('#contact', {
    //                 backgroundColor: '#DFDFF0',
    //                 duration: 0.1,
    //                 scrollTrigger: {
    //                     trigger: '#contact',
    //                     start: 'center bottom',
    //                     toggleActions: 'play none none reverse',
    //                 }
    //             })
    //             gsap.to('#story', {
    //                 backgroundColor: '#DFDFF0',
    //                 color: '#000',
    //                 duration: 0.1,
    //                 scrollTrigger: {
    //                     trigger: '#contact',
    //                     start: 'center bottom',
    //                     toggleActions: 'play none none reverse',
    //                     markers: true
    //                 }
    //             })

    //         } 
    //         else 
    //         {

    //             gsap.from(contactImg1.current, {
    //                 y: '-200px',
    //                 opacity: 0,
    //                 duration: 1,
    //                 scrollTrigger: {
    //                     trigger: '#contact',
    //                     start: 'center bottom',
    //                     toggleActions: 'play none none reverse',
    //                 }
    //             })
                
    //             gsap.to('#story', {
    //                 backgroundColor: '#DFDFF0',
    //                 color: '#000',
    //                 duration: 0.1,
    //                 scrollTrigger: {
    //                     trigger: '#contact',
    //                     start: 'top+=100 bottom',
    //                     toggleActions: 'play none none reverse',
    //                 }
    //             })
    //             gsap.to('#story button', {
    //                 backgroundColor: '#000',
    //                 color: '#DFDFF0',
    //                 duration: 0.1,
    //                 scrollTrigger: {
    //                     trigger: '#contact',
    //                     start: 'top+=100 bottom',
    //                     toggleActions: 'play none none reverse',
    //                 }
    //             })
    //             gsap.to('#contact', {
    //                 backgroundColor: '#DFDFF0',
    //                 duration: 0.1,
    //                 scrollTrigger: {
    //                     trigger: '#contact',
    //                     start: 'top+=100 bottom',
    //                     toggleActions: 'play none none reverse',
    //                     markers: true
    //                 }
    //             })
                
    //         }
    //         // animations common in mobile/larger devices
    //         gsap.from(contactImg2.current, {
    //             y: '200px',
    //             opacity: 0,
    //             duration: 1,
    //             scrollTrigger: {
    //                 trigger: '#contact',
    //                 start: 'center bottom',
    //                 toggleActions: 'play none none reverse',
    //                 markers: true
    //             }
    //         })


    //     })

    // }, [])

  return (
    <div id='contact' className='bg-[#000] pt-48 pb-12 overflow-x-hidden'> 
        <div className='w-[92%] bg-[#000]   mx-auto relative rounded-xl lg:rounded-2xl'>

            <div className='size-full relative flex flex-col items-center !overflow-hidden z-1 py-36 lg:py-16 gap-3 lg:gap-10'>

                <div ref={contactImg1} className='w-50 h-54 absolute -rotate-x-20 -rotate-y-30 left-56 -top-10 overflow-hidden rounded-xl hidden lg:block'>
                    <img src="img/contact-1.webp" className='size-[100%] object-cover'/>
                </div>
                <div ref={contactImg2} className='w-56  h-56 absolute  -rotate-x-30 rotate-y-40  left-30  overflow-hidden rounded-xl -bottom-20 lg:-bottom-10'>
                    <img src="img/contact-2.webp" className='size-[100%] object-cover'/>
                </div>
                

                <div>
                    <span
                    className='uppercase font-general opacity-100   text-[10px] font-bold'>join</span> <span
                    className='uppercase font-general opacity-100  text-[10px] font-bold'>zentry</span>
                </div>

                <AnimatedTitle title='<span>let’s</span> <span class="special-font">b<b>u</b>ild</span> <span>the</span> <br /> <span>new</span> <span>era</span> <span>of</span> <span class="special-font">g<b>a</b>ming</span> <br /> <span class="special-font">t<b>o</b>gether.</span>' containerClass="text-5xl  mx-auto w-[95%] font-bold leading-[0.9] lg:leading-[0.8] lg:w-[65%] lg:text-8xl !my-0" />

                <button className='bg-[#DFDFF0] text-[#000] font-bold px-6 py-3 rounded-4xl text-[10px] cursor-pointer'>CONTACT US</button>

            </div>


            <TiltContainer hoverControl={false} tiltSpeed={15} defaultTilt='rotateX(11deg) rotateY(26deg) scale3d(1, 1, 1)' containerClass='!absolute top-10 right-0 z-10 !p-0 !w-[20rem] !h-auto overflow-visible rotate-x-[11deg] rotate-y-[26deg] !cursor-default !z-0'>

                <div className='absolute w-[20rem] h-[20rem] -top-5 lg:size-[20rem] lg:right-10 lg:-top-10'>

                    <div className='h-[10rem] w-[20rem] absolute z-10 overflow-visible hidden lg:h-[32rem] lg:w-[35rem] lg:-right-20 lg:-top-29 lg:block'>
                        <img src="img/swordman-partial.webp" className='object-cover object-center size-full' />
                    </div>

                    <div className='absolute  overflow-hidden -top-10 h-[10rem] w-[20rem] lg:-right-10 lg:-top-10 lg:h-[30rem] lg:w-[22rem]'> 

                        <div className='bg-amber-100  absolute -top-10  right-10 lg:h-[30rem] lg:w-[35rem] lg:-right-10 lg:-top-15'>
                            <img src="img/swordman.webp" className='object-cover object-center size-full' />
                        </div>

                    </div>

                </div>

            </TiltContainer>

            


        </div>
    </div>
  )
}

export default Contact