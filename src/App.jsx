import { useState } from 'react'


function App() {

  const [color , setColor] = useState("olive")

  return (
  
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap gap-3 bg-white shadow-lg justify-center px-4 py-4 rounded-lg '>
            <button onClick={() => setColor("red")}  className='outline-none px-4 py-1 text-white rounded-lg ' style={{backgroundColor: "red"}}> Red </button>
            <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 text-white rounded-lg ' style={{backgroundColor: "blue"}}> Blue </button>
            <button onClick={() => setColor("olive")} className='outline-none px-4 py-1 text-white rounded-lg ' style={{backgroundColor: "olive"}}> Olive </button>
            <button onClick={() => setColor("gray")} className='outline-none px-4 py-1 text-white rounded-lg ' style={{backgroundColor: "gray"}}> Gray </button>
            <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 text-white rounded-lg ' style={{backgroundColor: "yellow"}}> Yellow </button>
            <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 text-white rounded-lg ' style={{backgroundColor: "pink"}}> Pink </button>
            <button onClick={() => setColor("Lavender")} className='outline-none px-4 py-1 text-white rounded-lg ' style={{backgroundColor: "Lavender"}}> Levender </button>
            <button onClick={() => setColor("Black")} className='outline-none px-4 py-1 text-white rounded-lg ' style={{backgroundColor: "black"}}> Black </button>
            <button onClick={() => setColor("white")} className='outline-none px-4 py-1 text-black rounded-lg ' style={{backgroundColor: "white"}}> White </button>
          </div>
        </div>
      </div>
  
  )
}

export default App
