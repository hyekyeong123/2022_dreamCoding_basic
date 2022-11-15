import React, {useEffect, useState} from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  // ******************************************

  // checked가 변경될때마다 다시 실행(useEffect 사용)
  useEffect(()=>{
    fetch(`data/${checked ? 'sale_':''}products.json`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProducts(data);
    });
    return () => {
      console.log("component anmount");
    }
  },[checked]);

  const handleChange =  () => {
    setChecked((prev) => !prev);
  }

  // ******************************************
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label
        htmlFor="checkbox">
        오직 세일 하는 품목만 보여주기
      </label>
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
    </>
  );
};