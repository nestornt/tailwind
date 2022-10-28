import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Side from './Side';


const Main = () => {
  return (
    <div className="flex pb-4 bg-blue-100">
      <main className="flex flex-col w-2/3 pl-6 pr-4 pt-4 ">
        <article className="my-4 shadow">
          <a href="#">
            <img className="hover:opacity-75" src="https://source.unsplash.com/xrVDYZRGdw4/1600x900" />
          </a>
          <div className="flex flex-col p-6 pt-2 bg-white">
            <a href="#" className="my-2 text-sm font-bold uppercase border-b-2 border-yellow-500 text-blue-600">Layout</a>
            <a href="#" className="pb-4 text-3xl font-serif font-bold hover:text-gray-700 ">Lorem Ipsum
              Dolor Sit Amet Dolor Sit Amet</a>
            <p className="pb-3 text-sm">By <a href="#" className="font-semibold hover:text-gray-800">David
              Jacobs</a>, May 25, 2021</p>
            <p className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
              dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit
              amet posuere magna..</p>
            <a href="#" className="flex uppercase text-xs text-blue-600 hover:text-yellow-500">Continue Reading
            <FaArrowRight className='pl-2 text-base'/></a>
          </div>
        </article>
        <article className="my-4 shadow">
          <a href="#">
            <img className="hover:opacity-75" src="https://source.unsplash.com/4UGmm3WRUoQ/1600x900" />
          </a>
          <div className="flex flex-col p-6 pt-2 bg-white">
            <a href="#" className="my-2 text-sm font-bold uppercase border-b-2 border-yellow-500 text-blue-600">Imagery</a>
            <a href="#" className="pb-4 text-3xl font-serif font-bold hover:text-gray-700 ">Lorem Ipsum
              Dolor Sit Amet Dolor Sit Amet</a>
            <p className="pb-3 text-sm">By <a href="#" className="font-semibold hover:text-gray-800">Monica
              Sanchez</a>, May 10, 2021</p>
            <p className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
              dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit
              amet posuere magna..</p>
              <a href="#" className=" flex pr-4 uppercase text-xs text-blue-600 hover:text-yellow-500">Continue Reading
              <FaArrowRight className='pl-2 text-base'/></a>
          </div>
        </article>
        <article className="my-4 shadow">
          <a href="#">
            <img className="hover:opacity-75" src="https://source.unsplash.com/TkZYCXmrKK4/1600x900" />
          </a>
          <div className="flex flex-col p-6 pt-2 bg-white">
            <a href="#" className="my-2 text-sm font-bold uppercase border-b-2 border-yellow-500 text-blue-600">Typography</a>
            <a href="#" className="pb-4 text-3xl font-serif font-bold hover:text-gray-700 ">Lorem Ipsum
              Dolor Sit Amet Dolor Sit Amet</a>
            <p className="pb-3 text-sm">By <a href="#" className="font-semibold hover:text-gray-800">David
              Jacobs</a>, April 20, 2021</p>
            <p className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
              dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit
              amet posuere magna..</p>
            <a href="#" className="flex uppercase text-xs text-blue-600 hover:text-yellow-500">Continue Reading
            <FaArrowRight className='pl-2 text-base'/></a>
          </div>
        </article>
      </main>
      <Side/>
    </div>
  )
}

export default Main