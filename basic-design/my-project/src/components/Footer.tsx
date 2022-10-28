import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const styles = {
 icons: {
    fontSize: "32px",
    lineHeight: "38px"
  }
};

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-900">
        <div className="flex flex-wrap text-white">
          <div className="w-1/3 p-5 border-r border-blue-800">
            <div className="my-6 text-xl font-semibold">ABOUT US</div>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa. Donec eget elementum sapien, tincidunt tempor nunc. Cras sodales id ipsum at convallis.</p>
          </div>

          <div className="w-1/3 p-5 text-center border-r border-blue-800">
            <div className="my-6 text-xl font-semibold">CONTACT US</div>
            <p className="text-gray-400">
              A108 Adam Street <br/>
              New York, NY 535022 <br/>
              United States <br/>
              <strong>Phone:</strong> +1 5589 55488 55 <br/>
              <strong>Email:</strong> info@webcraft.com
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <button className="w-10 h-10 p-1 rounded bg-blue-500 hover:bg-gradient-to-t from-blue-500 to-blue-400">
                <FaFacebook style={styles.icons}/>
              </button>
              <button className="w-10 h-10 p-1 rounded bg-blue-400 hover:bg-gradient-to-t from-blue-400 to-blue-500">
                <FaTwitter style={styles.icons}/>
              </button>
              <button className="w-10 h-10 p-1 rounded bg-gray-700 hover:bg-gradient-to-t from-gray-700 to-gray-600">
                <FaGithub style={styles.icons}/>
              </button>
            </div>
          </div>

          <div className="w-1/3 p-5">
            <div className="my-6 text-xl font-semibold">SAY HELLO!</div>
            <form>
              <input className="w-full h-10 mb-4 p-2 border-b-2 border-blue-800 bg-blue-900" type="email" placeholder="Your email"/>
              <textarea className="w-full h-24 mb-6 px-2 pt-2 border-b-2 border-blue-800 bg-blue-900" placeholder="Your message"></textarea>
              <button className="w-full px-4 py-2 rounded font-semibold tracking-wider bg-yellow-600 hover:bg-yellow-500" type="button">SEND</button>
            </form>
          </div>
          
        </div>
      </footer>
    </>
  )
}

export default Footer