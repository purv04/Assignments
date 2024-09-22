import React from 'react'
import { useNavigate } from 'react-router-dom'


function Homepage() {
    const navigate =useNavigate();
    const handleClick=()=>{
        navigate('/services');
        // navigate(-1) it will go to previous page 
    };
  return (
    <div>
       
        <p> Homepage</p>
        <button onClick={handleClick} className='m-4 bg-violet-500 px-8 rounded-md text-white py-4'>
            Back</button>
    </div>
  )
}

export default Homepage

// through this we can go to servises by clicking on the button  