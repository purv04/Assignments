import React from 'react'
import { useRef } from 'react'

function Ref() {
// console.log(useRef(null))
const inputRef = useRef(null);
console.log(useRef);

const handleSubmit=(e)=>{
    e.preventDefault();  // this is used bcoz the page gets refreshed on sumit  
    console.log(inputRef.current.value);
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} className='w-64 p-2 h-10 border border-blue-400'
            type="text" />
            <button className='bg-blue-400 px-6 py-2'>Submit</button>
        </form>

    </div>
  )
}

export default Ref