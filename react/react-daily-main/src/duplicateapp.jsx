// day1:
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Day1/card'

function App() {
 
  return (
    <div>
      <Card/>
    </div>
    
  )
}

// export default App


// day2:

import React from 'react'
import Mydata from './Day2/Mydata'

function App() {
 const array=[{
  name:"IPhone", 
  productprice:"3500", 
  product:"electronics",
  description:"very useful and nice product "

 },
 {
  name:"Samsung", 
  productprice:"6500", 
  product:"electronics",
  description:"very useful and nice product "

 },
 {
  name:"Moto", 
  productprice:"500", 
  product:"electronics",
  description:"very useful and nice product "

 }
]

return(
  <div>

    {
      array.map((value)=>(
        <Mydata pname={value.name} pprice={value.productprice}
        pproduct={value.product} pdescription={value.description} />
        
          
      ))
      
    }




  </div>
)
}

// export default App

// day3:

import React from 'react'

function App() {
  return (
    <div>
        <DuplicateApi/>

    </div>
  )
}

// export default App




import React from 'react'
import DuplicateApi from './Day3/DuplicateApi'
import { Datacontext } from './datacontext'



function App() {




  const mydata = {
    name:"angha",
    password:"123"
    
  }




return(
  <div>
      {/* <DuplicateApi/> */}
   

    <Datacontext.Provider value={{mydata}}>

    <DuplicateApi/>
    </Datacontext.Provider>



  </div>
)
}

// export default App



// day5:

import React from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import ProductCardList from './Day4/ProductCardList'
import Navbar from './Day4/Navbar'
import Homepage from './Day5/Homepage'
import About from './Day5/About'
import Contact from './Day5/Contact'


function App() {
  return (
    <Router>
    <div>
      
      <Navbar/>
      <Routes >
         <Route path='/' element={<Homepage/>} ></Route>
         <Route path='/about' element={<About/>} ></Route>
         <Route path='/contact' element={<Contact/>} ></Route>
         <Route path='/Products' element={<ProductCardList/>} ></Route>
         
         
      </Routes>
      
    
     
    </div>
    </Router>
 
  )
}

// export default App


// day 6:
import React from 'react'
import { Datacontext } from './datacontext'
import Context from './Day6/context'

function App() {
  const mydata = {
    department :"cse",
    pername:"angha",
    rollno:"22etccs017"
     }

  return (
    <div>
      <h1>context API</h1>

      <Datacontext.Provider value={{mydata}}>
      <Context/>
      
      </Datacontext.Provider>

      

    </div>
  )
}

export default App






