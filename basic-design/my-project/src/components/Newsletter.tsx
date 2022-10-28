import React from 'react'

const Newsletter = () => {
  return (
    <section className="flex flex-col items-center p-4 bg-red-400">
      <div className="text-center text-white">
        <h2 className="font-bold text-3xl">Want to stay up-to-date?</h2>
        <h3 className="text-xl">Join our mail list for hot news & new tutorials</h3>
      </div>
      <div>
        <form className="my-4 flex">
          <input className="p-4 rounded-l-lg focus:outline-none text-gray-800" placeholder="your@mail.com" />
          <button 
            className="p-4 rounded-r-lg font-bold uppercase tracking-wider text-white bg-green-600 hover:bg-green-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter