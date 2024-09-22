import React from 'react'

function List() {
    const userData = [
        { id:1, name: 'john', age: 23 },
        { id:2, name: 'alex', age: 24 },
      ];
    const arr=['🍿','😊','❌'];
  return (
    <div>
        <ul>
        {
            arr.map((el)=>(
                <li key={el}>{el}</li>
            ))
        }
        </ul>
        {
            userData.map((el)=>(
             <div key={el.id}>
                 <p>{el.name}</p>
                 <p>{el.age}</p>
             </div>
            ))
        }

    </div>
  )
}

export default List