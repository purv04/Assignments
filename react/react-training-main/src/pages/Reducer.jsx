import React, { useState } from 'react'

function Reducer() {
    const[count ,setCount]=useState(0);

    const handleIncre=()=>{
        setCount(count+1)

    }

    const handleDecrement=()=>{
        setCount(count-1)

    }


  return (
    <div>
     <h1 className='text-center m-5 font-semibold text-3xl'>Use Reducer Hook</h1>

     <p className='text-2xl m-2 font-semibold'> count : {count}</p>
     {/* <p className='text-2xl m-2 font-semibold'> count : {state.count}</p> */}

     <button onClick={handleIncre} className='btn'>increment</button> 
     <button  onClick={handleDecrement} className='btn'>decrement</button> 
    </div>
  )
}

export default Reducer


// initial state first we have to define the inital state in out application when using use reducer 

// reducer function =>(state ,action )=>{
    // }
    // action=>{
        // type:'',
        //payload:''
        // } dispatch={
        //always accepts 
        // }
    //