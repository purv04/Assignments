import React, { useEffect, useState } from 'react';

function ProductCardList() {
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/1${count}`)  // Fetching only the first product as an example
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
        setLoading(false);
      });
  }, [count]); // Empty array as dependency to run once when the component mounts

  function handleInc() {
    setCount(count + 1);
  }


  return (
    <div>
      <h1 className='m-4 font-semibold'>Count: {count}</h1>
      <button onClick={handleInc} className='bg-blue-400 text-white h-10 w-40 rounded-md m-2'>Increment</button>

      <img src={product.image} alt={product.title}  className='h-22 w-30'/>
      <h1>Title: {product.title}</h1>
      <h2>Price: ${product.price}</h2>
      <h3>description : {product.description}</h3>
      {/* <h4>Rating:{product.rating && product.rating.rate}</h4> */}
    </div>
  );
}

export default ProductCardList;
