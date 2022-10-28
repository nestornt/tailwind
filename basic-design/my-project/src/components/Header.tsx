import React from 'react'
import { FaWind } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container mx-auto">
      <header className="flex justify-between items-center sticky top-0 z-10 py-4 bg-blue-900">
        <div className="flex items-center shrink-0 ml-6 cursor-pointer">
          <FaWind className="text-yellow-500" size={30} />
          <span className="text-3xl font-semibold text-blue-200">Tailwind School</span>
        </div>
        <ul className="flex overflow-x-hidden mr-10 font-semibold">
          <li className="mr-6 p-1 border-b-2 border-yellow-500">
            <a className="cursor-default text-blue-200" href="#">Home</a>
          </li>
          <li className="mr-6 p-1">
            <a className="text-white hover:text-blue-300" href="#">News</a>
          </li>
          <li className="mr-6 p-1">
            <a className="text-white hover:text-blue-300" href="#">Tutorials</a>
          </li>
          <li className="mr-6 p-1">
            <a className="text-white hover:text-blue-300" href="#">Videos</a>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header