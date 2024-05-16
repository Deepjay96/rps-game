import React , { useState , useEffect, useCallback } from 'react'
import './App.css'

function App() {
    const [userchoice , setUserchoice] = useState("rock")

    const [computerchoice , setComputerchoice ] = useState("rock")   

    const [finalresult , setFinalresult] = useState("Let's see who wins")

    const [turn , setTurn] = useState("No one got a point")

    let img_arr = ["rock","paper","scissors"]
   
    let [userPoint , setUserPoint] = useState(0)

    let [computerPoint,setComputerPoint] = useState(0)

    let [val , setVal] = useState(0)
 
    let computerimg_name   
    
    
   
    function rps(){
      if(val >= 1){
     computerimg_name = img_arr[Math.round(Math.random()*2)] 
         
      setComputerchoice(computerimg_name)
               
      let comboMoves = userchoice + computerimg_name
 
      if(comboMoves === 'scissorspaper' || comboMoves === 'rockscissors' || comboMoves === 'paperrock' ){
          // console.log(userPoint+1)
           setUserPoint(userPoint+1 )
           setTurn("User got the point")
      }else  if(comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper'){
        //  console.log(computerPoint+1)
        setComputerPoint(computerPoint+1)
        setTurn("Computer got the point")
     }else if(comboMoves === 'rockrock' || comboMoves === 'paperpaper' || comboMoves === 'scissorsscissors'){
      setTurn("No one get's the point")
      }

    }
    }
   

    useEffect(()=>{
      rps()      
    },[userchoice , computerchoice])
    
   

  return (
   <>
         <h1 className='text-center text-3xl mt-4'> Rock Paper Scissors </h1>
         <div className='bg-black-900 flex justify-around mt-14'>
          <p>  User Points : {userPoint} </p>
          <p>  Computer Points : {computerPoint}  </p>
         </div>

         <div className='mt-24'>
              
             <div className='flex justify-center'>
                 
                 <img src={`public/images/${userchoice}.png`} className='user-hand' width={100} height={100}  alt="" />
                 <img src={`public/images/${computerchoice}.png`} width={100} height={100} alt="" />
              </div>  


      <div className='flex justify-center'>
     <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4' onClick={()=> {
          setUserchoice("rock")
          setVal(1)
           
     }} >rock</button>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4' onClick={()=>{
          setUserchoice("paper")
          setVal(1)
               
      }}>paper</button>
     <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4' onClick={()=>{
        setUserchoice("scissors")
        setVal(1)
        
     }}>scissors</button>
      </div>
         </div>

       

         <p className='text-left'>Turn Result: {turn} </p>
         <p className='text-left'>Final result: {finalresult} </p>
         
   
    <p className='m-4'>{userchoice + computerchoice}</p>
    

   </>
  )
}

export default App


// import React, { useEffect, useState } from 'react'

// export default function App() {

//   const [count , setCount] = useState(0)
  
//   useEffect(()=>{
//     alert("this is in alert")
//   },[])

//   return (
//     <div>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(()=>{
//                setCount(count+1) 
//           })}>counter {count}</button>  <br /><br />
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(()=>{
//                setCount(count+1) 
//           })}>counter {count}</button>
//     </div>
//   )
// }



