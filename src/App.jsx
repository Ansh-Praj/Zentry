import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import { useGSAP } from '@gsap/react'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Features from './components/Features'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {

  useGSAP(()=>{
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); 
    });

    gsap.ticker.lagSmoothing(0);

  })

  return (
    <>
      <main className='min-h-screen w-full relative '>
        {/* overflow-x-hidden in contact, story, about */}
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Story />
        <Contact />
        <Footer />
        <p className='text-[#000] text-center py-2'>Clone of <a className='underline' target='_blank' href="https://zentry.com/">Zentry</a></p>
      </main>
    </>
  )
}

export default App
