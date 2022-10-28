import React from 'react'

const Grid = () => {

  const styles = {
    box: {
      color: "white",
      backgroundColor: "green",
      minHeight: "150px",
      paddingTop: "10%",
      paddingLeft: "15%",
      fontSize: "1.5rem",
      fontWeight: "700"
    }
  }

  const { box } = styles;

  return (
    <div className="mx-auto p-8 w-full lg:w-1/2">
      <h1 className="text-3xl font-bold">Grid Layout Examples</h1>
      <h2 className="my-6 text-2xl underline underline-offset-2">Example #1</h2>
      <div className="grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-2">
        <div style={box} className="row-span-2 col-span-3">1</div>
        <div style={box} className="row-span-3 ">2</div>
        <div style={box}>3</div>
        <div style={box}>4</div>
        <div style={box}>5</div>
        <div style={box}>6</div>
        <div style={box}>7</div>
        <div style={box}>8</div>
      </div>

      <h2 className="my-6 text-2xl underline underline-offset-2">Example #2</h2>
      <div className="grid grid-cols-2 grid-rows-5 gap-x-4 gap-y-2">
        <div style={box} className="row-span-5">1</div>
        <div style={box}>2</div>
        <div style={box}>3</div>
        <div style={box}>4</div>
        <div style={box}>5</div>
        <div style={box}>6</div>
      </div>

      <h2 className="my-6 text-2xl underline underline-offset-2">Example #3</h2>
      <div className="grid grid-cols-4 grid-rows-2 gap-x-2 gap-y-4">
        <div style={box} className="col-span-2">1</div>
        <div style={box} className="col-span-2">2</div>
        <div style={box}>3</div>
        <div style={box}>4</div>
        <div style={box}>5</div>
        <div style={box}>6</div>
      </div>

      <h2 className="my-6 text-2xl underline underline-offset-2">Example #4</h2>
      <div className="grid grid-cols-3 grid-rows-4 gap-x-4 gap-y-2">
        <div style={box} className="row-span-2">1</div>
        <div style={box} className="row-span-4">2</div>
        <div style={box} className="row-span-2">3</div>
        <div style={box}>4</div>
        <div style={box}>5</div>
        <div style={box}>6</div>
        <div style={box}>7</div>
      </div>
      <hr className="my-6" />
      <div className="grid grid-cols-3 grid-rows-4 gap-x-4 gap-y-2">
        <div style={box} className="row-span-2">1</div>
        <div style={box} className="row-start-3">2</div>
        <div style={box} className="row-start-4">3</div>
        <div style={box} className="row-span-4">4</div>
        <div style={box} className="row-span-2">5</div>
        <div style={box}>6</div>
        <div style={box}>7</div>
      </div>

      <h2 className="my-6 text-2xl underline underline-offset-2">Complex grid</h2>
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        <div style={box} className="col-span-2">1</div>
        <div style={box} className="row-start-2 row-span-2">2</div>
        <div style={box} className="row-start-2">3</div>
        <div style={box} className="row-span-2">4</div>
        <div style={box} className="col-span-2">5</div>
      </div>
      
    </div>
  )
}

export default Grid