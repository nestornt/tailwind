import React from 'react'

const VersionOne = () => {
  return (
    <div className="m-6 p-8 md:mx-auto space-y-6 md:w-1/2 xl:w-1/3 bg-sky-50">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius vitae ...</p>
      <quote className="px-4 py-2 block border-l-4">Lorem ipsum dolor sit amet, consectetur ...</quote>
      <p>Aliquam id nulla dignissim felis bibendum aliquam. Cras vulputate blandit semper ...</p>
      <img className="mr-3 w-1/2 float-left rounded" src="https://source.unsplash.com/ZEfzyduAyJU"/>
      <p>Vestibulum congue felis at posuere commodo. Praesent sapien magna, aliquet ut ....</p>
      <p>Aenean scelerisque urna id dictum tempor. Pellentesque ipsum orci, convallis eget ...:</p>
      <ul className="ml-6 pl-6 space-y-3">
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ul>
      <p>Pellentesque tincidunt non orci id congue. Donec blandit pulvinar leo et tincidunt...</p>
      <hr/>
        <div className="flex pt-6">
          <img className="mr-6 mb-6 w-24 h-24 border-4 rounded border-b-[1rem]" src="https://source.unsplash.com/WNoLnJo7tS8" />
          <div>
            <p className="-mt-3">David Smith</p>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas 
              <a href="#" className="ml-1 underline underline-offset-4">varius vitae</a> ipsum et commodo.</p>
          </div>
        </div>
        
    </div>
  )
}

export default VersionOne