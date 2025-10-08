// import React,{useState} from 'react'
// const Home=()=>{
//     let [count,SetCount]=useState()
//     setInterval(()=>{
//         SetCount(new Date().toLocaleTimeString())
//     })



//     return(
//         <div>
//             <h2>{count}</h2>
//         </div>
//     )
// }

import React, { useState, useEffect } from 'react'
function Home() {
   const [count, setCount] = useState(0)
   let [city,setCity]=useState("pune")
   useEffect(() => 
    {console.log("hello")},
   [city])

   return(
       <div>
           <h2>{count}</h2>
           <h2>{city}</h2>
           <button onClick={()=>setCity("mumbai")}>Change City</button>
           <button onClick={()=>setCount(count+1)}>Click</button>
       </div>
   )
}


export default Home