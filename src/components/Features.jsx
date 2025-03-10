import React from 'react'
import TiltContainer from './TiltContainer'

function Features() {
  return (
    <section className='w-full bg-[#000000] py-28 lg:py-32 lg:-mt-1'> 

        <div className='pl-10 leading-[19px] lg:pl-35'>
            <h2>Explore the Zentry Universe</h2>
            <p className='text-[#595961] font-semibold lg:w-[30%]'>Immerse yourself in an IP-rich product universe where AI-driven gamification and hyper-personalization lead the human-agentic economy.</p>
        </div>


        <div className='mx-auto mt-24 w-[95%] lg:mt-32 lg:w-[80%]'>

          <TiltContainer tiltSpeed={55} containerClass=' border border-gray-100/30 rounded-md cursor-grab relative overflow-hidden  flex flex-col justify-between h-[50vh] lg:h-[70vh]' >


            <div className='z-1'>
              <h1 className='special-font text-5xl lg:text-6xl'>RADIA<b>N</b>T</h1>
              <p className='w-56 text-sm pt-3'>The game of games transforming your in-game actions across Web2 & Web3 titles into a rewarding adventure.</p> 
            </div>

            <button className='text-[#595961] text-[10px] cursor-grab border border-gray-100/30 px-5 py-2 rounded-4xl font-bold flex gap-2 w-fit bg-[#000000] z-1'>
              <img src="img/play.svg"  />
            COMING SOON</button> 

            <video 
            className='absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] h-full   w-full object-cover '
            src='videos/feature-1.mp4' loop muted ></video>

            
          </TiltContainer>

          {/* with grid */}
          <div className='grid mt-10 gap-x-10 lg:grid-cols-2'>

            <TiltContainer tiltSpeed={30} containerClass=' border border-gray-100/30 h-[50vh] lg:h-screen'>

              <div className='z-1'>
                <h1 className='special-font text-5xl lg:text-6xl'>Zig<b>M</b>a</h1>
                <p className='w-56 text-sm pt-3'>The NFT collection merging Zentry’s IP, AI, and gaming—pushing the boundaries of NFT innovation.</p> 
              </div>

              <button className='text-[#595961] text-[10px] cursor-grab border border-gray-100/30 px-5 py-2 rounded-4xl font-bold flex gap-2 w-fit bg-[#000000] z-1'>
                <img src="img/play.svg"  />
              COMING SOON</button> 

              <video 
              className='absolute top-0 left-0  h-full w-full object-cover object-left'
              src='videos/feature-2.mp4' loop muted></video>

            </TiltContainer>

            <div className='grid gap-y-10  lg:grid-rows-2 mt-10 lg:mt-0'> 

              <TiltContainer tiltSpeed={30} containerClass='h-[30vh] border border-gray-100/30 flex-1 lg:h-full'>

                <div className='z-1'>
                  <h1 className='special-font text-5xl lg:text-6xl'>nex<b>u</b>s</h1>
                  <p className='w-56 text-sm pt-3'>The player portal uniting humans & AI to play, compete, earn and showcase—gamifying social & Web3 experiences.</p> 
                </div>

                <button className='text-[#595961] text-[10px] cursor-grab border border-gray-100/30 px-5 py-2 rounded-4xl font-bold flex gap-2 w-fit bg-[#000000] z-1'>
                  <img src="img/play.svg"  />
                COMING SOON</button> 
                <video 
                className='absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] object-cover object-left lg:w-full'
                src='videos/feature-3.mp4' loop muted   ></video>



              </TiltContainer>

              <TiltContainer tiltSpeed={30} containerClass='h-[30vh] border border-gray-100/30 flex-1 lg:h-full'>

                <div className='z-1'>
                  <h1 className='special-font text-5xl lg:text-6xl'>az<b>u</b>l</h1>
                  <p className='w-56 text-sm pt-3'>The agent of agents elevating agentic AI experience to be more fun and productive.</p> 
                </div>

                <button className='text-[#595961] text-[10px] cursor-grab border border-gray-100/30 px-5 py-2 rounded-4xl font-bold flex gap-2 w-fit bg-[#000000] z-1'>
                  <img src="img/play.svg"  />
                COMING SOON</button> 

              
                <video 
                className='absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] object-cover object-left lg:w-full'
                src='videos/feature-4.mp4' loop muted   ></video>


              </TiltContainer>

            </div>
          </div>

          <div className='grid grid-cols-2  mt-10 h-[20vh] gap-5 lg:h-[50vh] lg:gap-10'>

            <TiltContainer tiltSpeed={25} containerClass='bg-[#5724FF] text-[#000000]' hoverControl={false}>
              <div>
                <h1 className='special-font text-5xl lg:text-6xl'>M<b>O</b>RE</h1>
                <h1 className='special-font text-5xl lg:text-6xl'>CO<b>M</b>ING</h1>
                <h1 className='special-font text-5xl lg:text-6xl'>S<b>O</b>ON</h1>
              </div>
            </TiltContainer>
            
            <TiltContainer tiltSpeed={25} hoverControl={false}>
              <video className='absolute top-0 left-0  h-full w-full object-cover object-center' autoPlay loop muted src="videos/feature-5.mp4"></video>
            </TiltContainer>
          </div>

        </div>

        
    </section>
  )
}

export default Features
