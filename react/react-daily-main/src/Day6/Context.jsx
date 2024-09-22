import React from 'react'
import { useContext } from 'react'
import { Datacontext } from '../datacontext'
import { data } from 'autoprefixer'

function Context() {

    const {mydata} = useContext(Datacontext)
  return (
    <div>
        {mydata.department}
        <br />
        {mydata.pername}
        <br />
        {mydata.rollno}

    </div>
  )
}

export default Context