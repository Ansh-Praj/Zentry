import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from "react-icons/ti";
import { PiWaveformLight, PiWaveformSlashBold  } from "react-icons/pi"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

function Navbar() {

    const audioRef = useRef()
    const navRef = useRef()
    const [isAudioPlaying, setIsAudioPlaying] = useState(false)
    const [isNavVisible, setIsNavVisible] = useState(true)
    const [isNavOnTop, setIsNavOnTop] = useState(true)


    useGSAP(()=>{
        gsap.to(navRef.current, {
            y: isNavVisible ? 0 : -110
        })

    }, [isNavVisible])


    useEffect(()=>{
        audioRef.current.volume = 1
        let lastScroll = window.scrollY


        window.addEventListener('scroll', (e)=>{
            const currentScroll = window.scrollY
            const deltaY = currentScroll - lastScroll
            
            if(window.scrollY < 100){
                setIsNavOnTop(true)
            } else {
                setIsNavOnTop(false)
            }
            
            if(deltaY > 0){
                setIsNavVisible(false)
            } else {
                setIsNavVisible(true)
            }         
            

            lastScroll = currentScroll
            
        })

        // window.addEventListener('wheel', (e)=>{
        //     if(e.deltaY > 0){
        //         setIsNavVisible(false)
        //     } else {
        //         setIsNavVisible(true)
        //     }         

        // })


        // let lastTouchY = 0;

        // document.addEventListener('touchstart', (event) => {
        //     lastTouchY = event.touches[0].clientY;
        // }, { passive: true });

        // document.addEventListener('touchmove', (event) => {
        //     const currentTouchY = event.touches[0].clientY;
        //     const deltaY = lastTouchY - currentTouchY;
        //     console.log(deltaY);
            

        //     // Show or hide navbar based on deltaY
        //     if (deltaY > 5 && isNavVisible) {
        //         // Scroll down: hide navbar
        //         setIsNavVisible(false);
        //     } else if (deltaY < 1 && !isNavVisible) {
        //         // Scroll up: show navbar
        //         setIsNavVisible(true);
        //     }

        //     lastTouchY = currentTouchY; // Update for next move
        // }, { passive: true });


    }, [])

    
    function handleAudio(){
        
        if(isAudioPlaying){
            audioRef.current.pause()
            setIsAudioPlaying(false)
        } else {
            audioRef.current.play()
            setIsAudioPlaying(true)
        }
        
    }


   
  return (
    <div
    ref={navRef}
    className={`fixed top-2 z-50  ${isNavOnTop ? 'bg-transparent' : 'bg-black' } transition-colors duration-700 inset-x-2 lg:inset-x-4  rounded-lg`}
    >
        <nav 
        className='w-full px-6 py-4 flex justify-between items-center'>
            
            <div className='flex gap-8'>
                <img src="./img/logo.svg" alt="logo" />

                <div className='flex gap-3'>
                    <Button
                    containerClass='bg-blue-50 text-[10px] font-bold px-4 py-2 rounded-4xl gap-1 h-fit'
                    title='PRODUCTS'
                    rightIcon={<TiLocationArrow style={{transform: 'rotate(135deg) translateY(1px)', fontSize: 16}}/>} />

                    <Button
                    containerClass='bg-blue-50 text-[10px] font-bold px-4 py-2 rounded-4xl h-fit'
                    title='WHITEPAPER' />
                </div>
            </div>

            <div className='hidden lg:flex lg:gap-3 lg:items-center'>
                <Button
                containerClass='hover:bg-blue-50 hover:text-black transition-all duration-200 text-blue-50 tracking-wide text-[11px] font-semibold px-4 py-2 rounded-4xl gap-1 h-fit'
                title='NEXUS'
                rightIcon={<TiLocationArrow style={{fontSize: 16}}/>} />
                <Button
                containerClass='hover:bg-blue-50 hover:text-black transition-all duration-200 text-blue-50 tracking-wide text-[11px] font-semibold px-4 py-2 rounded-4xl gap-1 h-fit'
                title='VAULT'
                rightIcon={<TiLocationArrow style={{fontSize: 16}}/>} />
                <Button
                containerClass='hover:bg-blue-50 hover:text-black transition-all duration-200 text-blue-50 tracking-wide text-[11px] font-semibold px-4 py-2 rounded-4xl gap-1 h-fit'
                title='PROLOGUE' />
                <Button
                containerClass='hover:bg-blue-50 hover:text-black transition-all duration-200 text-blue-50 tracking-wide text-[11px] font-semibold px-4 py-2 rounded-4xl gap-1 h-fit'
                title='ABOUT' />
                <Button 
                containerClass='hover:bg-blue-50 hover:text-black transition-all duration-200 text-blue-50 tracking-wide text-[11px] font-semibold px-4 py-2 rounded-4xl gap-1 h-fit'
                title='CONTACT' />

                <button 
                onClick={handleAudio}
                className='text-blue-50 cursor-pointer w-fit h-fit'>
                    <audio ref={audioRef}
                    className='hidden' loop src="./audio/loop2.mp3" />

                    {isAudioPlaying ? <PiWaveformLight size={20}/> : <PiWaveformSlashBold size={20}/> }
                </button>

            </div>
        </nav>
    </div>
  )
}

export default Navbar