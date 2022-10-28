import React from 'react'
import { useRef } from 'react'

const Header = () => {

  const MobileMenuRef = useRef(null);

  const toogleMobileMenu = () => {
    MobileMenuRef.current.classList.toggle("hidden")
  }


  return (
    <header className="flex items-center justify-between flex-wrap bg-maroon-200 xs:bg-maroon-300 sm:bg-indigo-950 py-4 w-full">
      <div className="flex-shrink-0 ml-6">
        <a href="#">
          <i className="fas fa-drafting-compass fa-2x text-yellow-500"></i>
          <span className="ml-1 text-3xl text-blue-200 font-semibold font-display">WebCraft</span>
        </a>
      </div>

      <button onClick={toogleMobileMenu} id="nav-toggle" className="md:hidden p-2 mr-4 ml-6 my-2 border rounded border-gray-600 text-blue-200 hover:border-blue-200">
        <i className="fas fa-bars fa-2x"></i>
      </button>

      <div  className="pl-6 w-full md:w-auto hidden md:block" ref={MobileMenuRef}>
        <ul className="md:flex font-display">
          <li className="mr-6 p-1 md:border-b-2 border-yellow-500">
            <a className="text-blue-200 cursor-default" href="#">Home</a>
          </li>
          <li className="mr-6 p-1">
            <a className="text-white hover:text-blue-300" href="#">Services</a>
          </li>
          <li className="mr-6 p-1">
            <a className="text-white hover:text-blue-300" href="#">Projects</a>
          </li>
          <li className="mr-6 p-1">
            <a className="text-white hover:text-blue-300" href="#">Team</a>
          </li>
          <li className="mr-6 p-1">
            <a className="text-white hover:text-blue-300" href="#">About</a>
          </li>
          <li className="mr-6 p-1">
            <a className="text-white hover:text-blue-300" href="#">Contacts</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header