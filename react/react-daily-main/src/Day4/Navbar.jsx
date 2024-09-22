import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {
  return (
    <div className='bg-blue-400 h-10  flex justify-center items-center gap-4'>
       <Link to='/'>Home</Link>
       <Link to='/about'>About</Link>
       <Link to='/Products'> product </Link>
       <Link to='/contact'>Contact</Link>
       


    </div>
  )
}

export default Navbar