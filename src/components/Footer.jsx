import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className='w-full px-10 py-4 bg-[#5724FF] flex justify-between text-[#000] items-center flex-col gap-2 lg:flex-row lg:gap-0'>
        <p>&copy; Nova 2025. All rights reserved</p>
        <div className='flex gap-3'>
          <FaDiscord className='cursor-pointer hover:text-white'/>
          <a href="https://github.com/Ansh-Praj" target='_blank' className='cursor-pointer hover:text-white'>
            <FaGithub/>
          </a>
        </div>
        <p>Privacy Policy</p>
    </footer>
  )
}

export default Footer