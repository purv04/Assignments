// import React from 'react'
// import {  useEffect,useState } from 'react'


// function Fakestoreapi() {
//     const [count,setCount] = useState(0)
//     const [title,setTitle] = useState("")
//     const [price,setPrice] = useState("")
//     const [description,setDescription] = useState("")
//     // const [product,setProduct]=useState("")
   
//     useEffect(()=>{
//         fetch('https://fakestoreapi.com/products').then((res)=>{
//             return res.json()
//         }).then((data)=>{
//             console.log(data);
//             setTitle(data.title)
//             setPrice(data.price)
//             setDescription(data.description)
//             // setProduct(data)
//         })
//     })


//     function handleInc(){
//         setCount(count+1)
//     }


//   return (
//     <div>
//         {/* <h1>product</h1>
//         <h1>{count}</h1>

//        <button onClick={handleInc}> increment </button> */}
//          <h1>Title :{title}</h1>
//         <h2>Price :{price}</h2>
//         <h3>Description :{description}</h3>

//     </div>
//   )
// }

// export default Fakestoreapi





















import React, { useEffect, useState } from 'react';

function Fakestoreapi() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      {products.length === 0 ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-6">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Price: ${product.price}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Fakestoreapi;

