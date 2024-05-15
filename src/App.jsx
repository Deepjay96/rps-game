import React , { useState , useEffect, useCallback } from 'react'
import './App.css'

function App() {
    const [userimg , setUserimg] = useState("rock")

    let img_arr = ["rock","paper","scissors"]
  
    let num =   Math.round(Math.random()*2)

    let computerimg_name  = img_arr[num]
    

    const [userPoint , setUserPoint] = useState(0)

    const [computerPoint,setComputerPoint] = useState(0)

    let [val , setVal] = useState(0)
    
    useEffect(()=>{
       if(val >= 1){
          
          let comboMoves = userimg + computerimg_name

     if(comboMoves === 'scissorspaper' || comboMoves === 'rockscissors' || comboMoves === 'paperrock' ){
          setUserPoint( userPoint => (userPoint+1))
     }

     if(comboMoves === 'rockrock' || comboMoves === 'paperpaper' || comboMoves === 'scissorsscissors'){
         return 
     }

      
     if(comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper'){
        setComputerPoint( computerPoint => (computerPoint+1))
     }

   }
    },[userimg])
   

  return (
   <>
         <h1 className='text-center text-3xl mt-4'> Rock Paper Scissors </h1>
         <div className='bg-black-900 flex justify-around mt-14'>
          <p>  User points : {userPoint} </p>
          <p>  Computer Points : {computerPoint}  </p>
         </div>

         <div className='mt-24'>
              
             <div className='flex justify-center'>
                 
                 <img src={`public/images/${userimg}.png`} className='user-hand' width={100} height={100}  alt="" />
                 <img src={`public/images/${computerimg_name}.png`} width={100} height={100} alt="" />
              </div>  


      <div className='flex justify-center'>
     <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4' onClick={()=> {
          setUserimg("rock")
          setVal(val+1)
     }} >rock</button>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4' onClick={()=>{
          setUserimg("paper")
          setVal(val+1)
      }}>paper</button>
     <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4' onClick={()=>{
        setUserimg("scissors")
        setVal(val+1)
     }}>scissors</button>
      </div>
         </div>

       

         <p className='text-left'>Turn Result: Lorem ipsum dolor sit amet. </p>
         <p className='text-left'>Final result: Lorem ipsum dolor, sit amet consectetur adipisicing. </p>
         
   
    <p className='m-4'>{userimg + computerimg_name}</p>
   

   </>
  )
}

export default App



