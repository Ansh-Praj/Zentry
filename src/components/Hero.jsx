import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { ScrollTrigger } from 'gsap/all'
import { FaLocationArrow } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger)

function Hero({isLoading, setIsLoading}) {

    const [currentIndex, setCurrentIndex] = useState(1)
    const [hasClicked, setHasClicked] = useState(false)
    const [loadedVideos, setLoadedVideos] = useState(0)

    const nextVdRef = useRef(null)
    const bigPlayer = useRef(null)
    const loadedVideoSources = useRef(new Set())

    const totalVideos = 4
    const upcomingVideoIndex = currentIndex % totalVideos + 1
    const getVideoSrc = (index) => `videos/hero-${index}.mp4`

    useEffect(()=>{
        if(loadedVideos >= 4){
            setIsLoading(false)
        }
    }, [loadedVideos])

    useGSAP(()=>{
        if(hasClicked){
            const currTime = bigPlayer.current.currentTime;
            bigPlayer.current.currentTime = currTime;

            gsap.to('#next-video', {
                visibility: 'visible',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => {
                    nextVdRef.current.play()
                },
                onComplete: ()=> {
                    bigPlayer.current.src = getVideoSrc(currentIndex);
                }
            })
            
            gsap.from('#current-video', {
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut'
            })
            
        }
        
    }, { dependencies: [currentIndex], revertOnUpdate: true })

    //scroll triger
    useGSAP(()=>{

        gsap.set('#video-frame', {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            borderRadius: '0px'
        })
        
        gsap.to('#video-frame', {
            clipPath: 'polygon(30% 1%, 70% 0, 89% 85%, 7% 69%)',
            borderRadius: '200px',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                scrub: 0.7,
                start: "center center",
                end: 'bottom+=200px center'
            }
        })
    })
    
    function handleVideoLoad(e){
        const src = e.target.currentSrc;

        if (!loadedVideoSources.current.has(src)) {
            loadedVideoSources.current.add(src)
            setLoadedVideos(prev => prev + 1)
        }
    }
    
    function handleMiniVdClick(e){
        bigPlayer.current.currentTime += 0.6
        setHasClicked(true)
        setCurrentIndex(upcomingVideoIndex)
    }


  return (
    <div className='relative h-screen w-full'>
        <div className="hidden">
        {[1, 2, 3, 4].map((index) => (
            <video
            key={index}
            src={getVideoSrc(index)}
            onLoadedData={handleVideoLoad}
            />
        ))}
        </div>


        {isLoading && (
          <div className='absolute flex justify-center items-center z-100 h-screen w-full overflow-hidden bg-violet-50'>
            <div className='three-body'>
              <div className='three-body__dot' />
              <div className='three-body__dot' />
              <div className='three-body__dot' />
            </div>
          </div>
        )}


        <div id='video-frame' className='relative z-10 h-screen w-full overflow-hidden rounded-lg bg-blue-75 '>
            <div>
                {/* mini video */}
                <div className='mask-clip-path  absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg '>
                    <div onClick={handleMiniVdClick} className='origin-center scale-50 opacity-0 hover:scale-100 hover:opacity-100 transition-all duration-500 ease-in  '>
                        <video 
                        //ref={nextVdRef} 
                        src={getVideoSrc(upcomingVideoIndex)}
                        loop
                        muted
                        id='current-video'
                        className='object-cover object-center size-64 scale-150 origin-center'
                        onLoadedData={handleVideoLoad}
                        ></video>
                    </div>
                </div>


                {/* mini player to big player */}
                <video 
                id='next-video'
                muted
                loop
                ref={nextVdRef}
                src={getVideoSrc(currentIndex)}
                className='z-20 absolute-center size-64 object-center object-cover invisible'
                onLoadedData={handleVideoLoad}
                ></video>


                {/* big player */}
                <video 
                ref={bigPlayer}
                autoPlay
                muted
                className='h-screen w-full object-cover object-center'
                loop
                onLoadedData={handleVideoLoad}
                src={getVideoSrc(1)}></video>

            </div>
        
            <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75 pointer-events-none'>
                G<b>a</b>MING
            </h1>


            <div className='absolute top-0 left-0 z-40'>
                <div className='mt-20 px-5 sm:px-10 text-blue-100'>
                    <h1 className='special-font hero-heading pointer-events-none'>
                        REDEFI<b>N</b>E
                    </h1>
                    <p className='tracking-wider max-w-64 font-robert-regular mb-8'>Enter the Metagame  <br /> Unleash the Play Economy</p>

                    <Button 
                    containerClass='bg-yellow-300 text-xs font-semibold px-6 py-3 gap-3 rounded-3xl' 
                    title='WATCH TRAILER'
                    leftIcon={<FaLocationArrow style={{transform: 'rotate(45deg)'}} />} />
                </div>
            </div>
        </div>

        <h1 className='special-font hero-heading absolute bottom-5 right-5 text-black pointer-events-none'>
                G<b>a</b>MING
        </h1>
    </div>
  )
}

export default Hero