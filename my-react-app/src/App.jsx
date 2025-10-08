// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// ------------------------------------------------------------------------------------
// import React,{useState} from "react";

// const App=()=>{
//   // let count=0
//   // function func1(){
//   //   count+=1
//   //   console.log(count)
//   // }

//   let[state, SetState]=useState("lightblue")
  
//   let[count,SetCount]=useState(0)
//   function func1(){
//     SetCount(count+1)
//     console.log(count)
//     if(state==="lightblue"){
//       SetState("lightgreen")
//     }
//     else{
//       SetState("lightblue")
//     }
//   }

//   function func2(){
//     if (count>0)
//     {SetCount(count-1)
//     if(state==='lightblue')
//       SetState("lightpink")
//     else{
//       SetState("lightblue")
//     }
//     }
//   }

//   // function func3(){
//   //   SetCount(0)
//   //   SetState("lavender")

//   // }

 

//   return(
//     <div style={{backgroundColor:state,height:700,}}>
//       <h1>Hello React</h1>
//       <p>This is my first React app.</p>
//       <h2>Count: {count}</h2>
//       <button onClick={func1}>Count++</button>
//       <button onClick={func2}>Count--</button>
//       <button onClick={()=>{SetCount(0),SetState("lavender")}}>Reset</button>
      
//       <form>
//         <input type="text"/>
//         <button >Submit</button>
//       </form>
//     </div>
//   )

// }
//-----------------------------------------------------------------------------------



import React from 'react'
import { useState } from 'react';
const App=()=>{
    let [data,SetData]= useState({
      name:"",
      email:"",
      password:""
    })

    function fun1(e){
      let {name,value}=e.target
      SetData({...data,[name]:value})
      console.log(data)
    }
    let [show,SetShow]=useState({})
    function done(){
      SetShow({...data})
      console.log(show)
    }

  return(
    <div>
      {show.name}
      <input type="text" onChange={fun1} name="name" value={data.name} placeholder="Enter your name"></input> 
      <br></br> <br></br>
      {show.email}
      <input type="email" onChange={fun1} name="email" value={data.email} placeholder="Enter your email"></input>
      <br></br> <br></br>
      {show.password}
      <input type="password" onChange={fun1} name="password" value={data.password} placeholder="Enter your password"></input>
      <br></br> <br></br>
      <button type="submit" onClick={done}>click</button>
      </div>
  )
}






export default App

