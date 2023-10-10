import { useState } from 'react'
import { useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setColor] = useState("#add8fe");

  
  const [password , setpassword] = useState("PASSWORD");
  const [length , setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "@#$%&*?/"

    for(let i=1 ; i<=array.length ; i++){
      let char = MAth.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass);

  })


  return (
    <>
    <div id="main">
    <h1>PROJECTS</h1>
    <div id="cards">
      <div id="bg-changer" style={{backgroundColor: color}}>
        <div className="flexd flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={()=>setColor("red")} style={{backgroundColor: "red"}}>RED</button>
            <button onClick={()=>setColor("green")} style={{backgroundColor: "green"}}>GREEN</button>
            <button onClick={()=>setColor("blue")} style={{backgroundColor: "blue"}}>BLUE</button>
            <button onClick={()=>setColor("#212121")} style={{backgroundColor: "#212121"}}>GRAY</button>
            <button onClick={()=>setColor("#faebd7")} style={{backgroundColor: "#faebd7"}}>OFF-WHITE</button>
            <button onClick={()=>setColor("#000")} style={{backgroundColor: "#000"}}>BLACK</button>
          </div>
        </div>
      </div>
      <div id="two">
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
          <h1 className='text-xl'>PASSWORD</h1>
          <div id="out" className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
            <input id="field"
            type="text"
            value={password}
            placeholder='password'
            readOnly
            />
            <button id="c">COPY</button>
          </div>
          <div id="in">
            <input 
            type="range" 
            min={5}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setLength(e.target.value)
            }}
            id="len" />
            <label>length: {length}</label>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="num"
            onChange={()=>{
              setNumberAllowed((prev)=> !prev);
            }}/>
            <label>NUMBERS</label>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="num"
            onChange={()=>{
              setCharAllowed((prev)=> !prev);
            }}/>
            <label>CHARECTER</label>
          </div>
        </div>
      </div>
      <div id="three">three</div>
    </div>
    </div>
    </>
  )
}

export default App
