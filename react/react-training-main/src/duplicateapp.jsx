// day1:

// file ka first letter should be capital
//jsx contains both html and react 
// import Button from "./button" 
// import Card from "./Day1/Card"
import styleimg from "../src/Day1/media/photo.jpg"
import Card from "./Day1/Card"
function App(){
// const firstname = 'angha'
  return (
    <div>
      {/* <Button/> */}
       <Card/>
      {/* <img src={myimg} alt="" /> */}
     {/* <h1>React</h1>
     <p>hellooo world i m angha</p>
     <p>{firstname}</p>  */}
     {/* <img src={myimg} alt="" /> */}
     {/* <img src={styleimg} alt="" />
     <h1>happy birthday</h1>
     <p>today is my birthday </p> */}
     

    </div>

  )
 }

// export default App





// day2:


// file ka first letter should be capital
//jsx contains both html and react 
// rfce for normal function 
// fafce for arrow function 
// className
// curly braces for writing  number
// style ke liye object bana padega {()} 
// PROPS PARENT SE CHILD MAINE 
// PROPS -JS OBJECTS 
import Button from "./button" 
function App(){
  const styles={color:'red',backgroundColor:'blue'};
  return (
    <div>
      <Button text="click"/>
      <Button text="Submit"/>
      <Button text="apply"/>
      <Button text="contact"/>
      <h1 style={styles}>react</h1>
      <input maxLength={5}/>

     
    </div>

  )
 }

// export default App

// day3:


// import Button from "./button" 

import { useState } from "react";

function App(){
  let firstName="abc"
   const handleClick=()=>{
    console.log("button click")
    firstName="xyz"
    console.log(firstName);
   }
  return (
    <div>
      <p>{firstName}</p>
      <button onClick={handleClick}
       className="bg-blue-500 py-2 px-6 rounded-md m-2 text-white">click</button>
      
    </div>

  )
 }

// export default App


// day4:
// import Button from "./button" 
import List from "./components/List";
import Form from "./components/Form";

import { useState } from "react";

function App(){
 const [firstName,setFirstName]=useState('abc')
// firstName is always abc but the onclick chnages are happening in function 
   const handleClick=()=>{
    setFirstName('xyz')
    console.log(firstName);
   }
  return (
    <div>
      <p>{firstName}</p>
     
      <button onClick={handleClick}
       className="bg-blue-500 py-2 px-6 rounded-md m-2 text-white">click</button>
       <List/>
       <Form/>
      
      
    </div>

  )
 }

// export default App;


// day4:
import Condition from "./components/Condition";
import Render from "./components/Render";

function App(){
 
  return (
    <div>
      {/* <Render/> */}
      <Condition/>
    </div>

  )
 }

// export default App;

// day5:
import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import Ref from './components/Ref'
// import Reducer from './pages/Reducer'
const Reducer =lazy(()=>import('./pages/Reducer'))
// lazy helps to load the data fast when we have data in the webpage 

// import Usememo from './components/Usememo'
import styled from 'styled-components';



function App() {
  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
  return (
    <div>
      <Title>helloooo users</Title>
      <Navbar/>
      {/* <Usememo/> */}
      <Suspense fallback={<div>loading</div>}>
      <Ref/>
      <Routes>
          
          <Route path='/' element={<Homepage/>}/>
          <Route path='/services' element={<Services/>}/>

          <Route path='/reducer' element={<Reducer/>}/>

          <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      </Suspense>


    </div>
  )
}

export default App




