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

