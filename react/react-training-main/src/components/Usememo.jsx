import React from 'react'
import { useState } from 'react'


function Usememo() {
    const [numbers ,setNumbers]=useState([1,2,3,4,5,6])

    const handleClick=()=>{
        setNumbers([...numbers,numbers.length+1])
       
    }
  return (
    <div className='flex'>
        {numbers.map(()=>{
            <p className=''>{num}</p>
        })}


    </div>
  )
}

export default Usememo