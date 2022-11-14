import React, {useEffect, useState} from 'react';

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  // ******************************************

  // 처음 데이터 가져올때 한번만
  useEffect(()=>{
    fetch('data/products.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProducts(data);
    });
    return () => {
      console.log("component anmount");
    }
  },[]);
  // ******************************************
  return (
    <>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <article>
              <h3>{p.name}</h3>
              <p>{p.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={()=>setCount((prev) => prev + 1)}>
        {count}
      </button>
    </>
  );
};