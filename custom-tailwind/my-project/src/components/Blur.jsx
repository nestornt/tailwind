
const arr = ["blur-sm", "blur", "blur-md", "blur-lg", "blur-2xl"];
const styles = {
  width: '2rem',
  height: '2rem',
  margin: '2rem auto',
  padding: '4px',
  backgroundColor: 'blue',
  color: 'white',
  textAlign: 'center'
};

const Blur = () => {
  return (
    <>
      <div className='flex w-1/3'>
        {arr.map((e,i) => <div key={i} style={styles} className={e}>{i}</div>)}
      </div>
      <div className="w-12 pt-1 h-12 m-auto bg-cyan-300 border-y-4 border-cyan-900 hover:blur-sm cursor-pointer text-center font-bold"><h1 className="inline">1</h1></div>
    </> 
  )
}

export default Blur