// // import React,{useState} from 'react'
// // const Home=()=>{
// //     let [count,SetCount]=useState()
// //     setInterval(()=>{
// //         SetCount(new Date().toLocaleTimeString())
// //     })



// //     return(
// //         <div>
// //             <h2>{count}</h2>
// //         </div>
// //     )
// // }
// ===============================================================
// import React, { useState, useEffect } from 'react'
// function Home() {
//    const [count, setCount] = useState(0)
//    let [city,setCity]=useState("pune")
//    useEffect(() => 
//     {console.log("hello")},
//    [city])

//    return(
//        <div>
//            <h2>{count}</h2>
//            <h2>{city}</h2>
//            <button onClick={()=>setCity("mumbai")}>Change City</button>
//            <button onClick={()=>setCount(count+1)}>Click</button>
//        </div>
//    )
// }


// export default Home

import React, { useEffect, useState } from 'react'
import './App.css'
const Home = () => {


      let arr=[1,2,3,4,5]
      let arr1=[6,7,8,...arr]
      console.log(arr1,"rrrr");
      

      





     let [apiData,SetData]=     useState([])
     let [filteredddData,SetFilteredddData]=     useState([])

     console.log("heheheheh");
     
  useEffect(()=>{
    fetch("https://dummyjson.com/recipes").then((res)=>{
      return res.json()

    }).then((data)=>{
      console.log(data.recipes);
      SetData(data.recipes)
      SetFilteredddData(data.recipes)
      

    })

  },[])

  function deletee(id){
    // console.log(id);
  let newArrr=   apiData.filter((a,b)=>{
      return  b!==id

    })
    SetData(newArrr)

    
  }
  function fun1(){
   let Data1=  [...apiData].sort((a,b)=>{
      return a.rating-b.rating
      
    })
    console.log(Data1,"SORTEDDDDD");
    
    SetData(Data1)


  }
  function fun2(){
    let Data1=  [...apiData].sort((a,b)=>{
      return b.rating-a.rating
      
    })
    console.log(Data1,"SORTEDDDDD");
    
    SetData(Data1)

  }

  function lunch(searchValue){
   let filtereddData=   apiData.filter((a)=>{
      return a.mealType[0]==searchValue

    })
    SetFilteredddData(filtereddData)

  }

  function dinner(a){
    let filtereddData=   apiData.filter((a)=>{
      return a.mealType[0]==a

    })
    SetFilteredddData(filtereddData)


  }
  return (
    <div>
      <button onClick={fun1}>acs</button>
      <button onClick={fun2}>des</button>
      <button onClick={()=>lunch("Lunch")}>lunch</button>
      <button onClick={()=>dinner("Dinner")}>dinner</button>
      <button>breakfast</button>


      {
        filteredddData.map((a,index)=>{
          return(<>
          <div id='card'>
          <img  src={a.image}/>
            <p>{a.name}</p>
            <p> Rating: {a.rating}</p>
            <button  onClick={()=>deletee(index)}>delet</button>
           
          </div>
          </>)
        })
      }
    </div>
  )
}

export default Home