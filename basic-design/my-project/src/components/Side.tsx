import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Side = () => {
  return (
    <aside className="w-1/3 pl-4 pr-6 pt-8">
      <section>
        <form className="flex">
          <input type="text" className="w-full px-3 py-2 rounded-l-lg focus:outline-none text-gray-800" placeholder="Search..." />
          <button 
            className="px-2 rounded-r-lg focus:outline-none text-center text-xl text-gray-400 hover:text-gray-900 bg-white"
          >
            <FaSearch/></button>
        </form>
      </section>
      <section className="mt-8 text-white">
        <div className="p-4 rounded-lg shadow-xl text-center bg-gradient-to-b from-red-400 to-red-200">
          <h3 className="font-semibold text-lg">Get the latest news & tutorials right to your inbox</h3>
          <form>
            <input type="email" placeholder="youremail@example.com" className="w-full mt-3 p-3 rounded shadow border border-gray-400 focus:outline-none text-gray-800" />
            <button 
              type="submit"
              className="w-full mt-4 p-4 rounded shadow font-semibold uppercase tracking-wider bg-green-600 hover:bg-green-500"
            > Subscribe
            </button>
          </form>
        </div>
      </section>
      <section className="mt-8">
        <h3 className="mb-4 pb-2 text-2xl font-semibold border-b-2 border-yellow-500 text-blue-600 ">
          Categories</h3>
        <ul>
          <li className="mb-1">
            <a className="text-blue-900 hover:text-blue-500" href="#">Layout (23)</a>
          </li>
          <li className="mb-1">
            <a className="text-blue-900 hover:text-blue-500" href="#">Typography (44)</a>
          </li>
          <li className="mb-1">
            <a className="text-blue-900 hover:text-blue-500" href="#">Colors (16)</a>
          </li>
          <li className="mb-1">
            <a className="text-blue-900 hover:text-blue-500" href="#">Imagery (19)</a>
          </li>
        </ul>
      </section>
    </aside>
  )
}

export default Side