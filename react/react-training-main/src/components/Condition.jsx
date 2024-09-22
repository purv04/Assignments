import React, { useState } from 'react'

function Condition() {
    const [islogin ,setIsLogin]=useState(false)
  return (
    <div className='flex justify-center items-center h-screen gap-5'>
        <p>{islogin ? 'wlcome user':'please login ' }</p>
        <button onClick={()=>setIsLogin(!islogin)}
        className='bg-sky-500 py-2 px-8'>{islogin ? 'logout' :'login'}</button>


    </div>
  )
}

export default Condition