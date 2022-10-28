import React from 'react'
import { useRef } from 'react'

const DarkMode = () => {

  const toogleDarkModeRef = useRef<HTMLDivElement | null>(null);

  const toogleDarkMode = () => {
    toogleDarkModeRef.current?.classList.toggle("dark");
  }

  return (
    <div ref={toogleDarkModeRef} onClick={toogleDarkMode} className="dark m-6 w-1/3">
      <div className="p-2 bg-white dark:bg-gray-800">
        <h1 className="text-gray-900 dark:text-white">Dark mode in action! Click me to toggle between light and dark modes...</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Lorem ipsum...
        </p>
      </div>
    </div>
  )
}

export default DarkMode