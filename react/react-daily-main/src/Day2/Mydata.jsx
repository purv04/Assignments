import React from 'react'

function Mydata(props) {
  return (
    <div>

        <h1>Name:-{props.pname}</h1>
        <h4>Product Price:- {props.pprice}</h4>
        <h3>product:-{props.pproduct}</h3>
        <p>description:-{props.pdescription}</p>
        <br />
    </div>
  )
}

export default Mydata