import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='bg-violet-500 h-6 flex justify-center items-center gap-4' >
        <Link  to='/'>Home</Link>
        <Link to='/services'>Services</Link>
        <Link to='/reducer'>UseReducer</Link>
      
    </div>
  )
}

export default Navbar