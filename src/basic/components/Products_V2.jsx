import React, {useEffect, useState} from 'react';

// 에러 메세지, 로딩 메시지 추가
export default function Products_V2() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  // ******************************************

  // checked가 변경될때마다 다시 실행(useEffect 사용)
  useEffect(()=>{
    setLoading(true);
    setErrorMessage(null);
    // *********
    fetch(`data/${checked ? 'sale_':''}products.json`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProducts(data);
    })
    .catch(e => {
      setErrorMessage("서버와의 통신이 실패하였습니다.")
    })
    .finally(() => setLoading(false));

    return () => {
      console.log("component anmount");
    }
  },[checked]);

  const handleChange =  () => {
    setChecked((prev) => !prev);
  }

  // ******************************************
  if(loading) return <p>Loading...</p>;
  if(errorMessage !== null) return <p>{errorMessage}</p>;

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