import React from 'react'
import { FaBars, FaPizzaSlice } from "react-icons/fa"
import { useRef } from 'react'

const Menu = () => {

  const navContentRef = useRef<HTMLDivElement | null>(null);

  const triggerSmMenu = () => {
    // Removes or adds "hidden" class from the referenced element
    navContentRef.current?.classList.toggle("hidden");
  }

  return (
    <header className="flex flex-wrap items-center justify-between bg-gray-900 py-4 w-full">
      <div className="flex-shrink-0 ml-6">
        <a href="#" className="flex items-center">
          <FaPizzaSlice color="#e63c6f" size={24}/>
          <span className="ml-2 text-3xl text-red-400 font-semibold">PizzaFactory</span>
        </a>
      </div>
      <button 
        className="md:hidden p-2 mr-4 ml-6 my-2 border rounded border-gray-600 text-blue-200 hover:border-blue-200"
        onClick={triggerSmMenu}
      >
        <FaBars size={20}/>
      </button>
      <div className="pl-6 w-full md:w-auto hidden md:block" id="nav-content" ref={navContentRef}>
        <ul className="md:flex">
          <li className="mr-6 p-1 md:border-b-2 border-red-500">
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

export default Menu