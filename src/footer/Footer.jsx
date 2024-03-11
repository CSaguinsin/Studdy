import React from 'react'
import StuddyLogo from '../assets/StuddyLogo.png'

const Footer = () => {
  return (
    

<footer className='pt-10'>
    <div  className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
     <img src={StuddyLogo} className="logo" alt="Flowbite Logo" />
    <ul  className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#"  className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#"  className="hover:underline me-4 md:me-6">Team</a>
        </li>
        <li>
            <a href="#"  className="hover:underline me-4 md:me-6">Help</a>
        </li>

    </ul>
    </div>
</footer>

  )
}

export default Footer