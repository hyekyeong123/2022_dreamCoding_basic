import React, {useState} from 'react';

export default function Counter({totalCount, onClick}) {
  const [count, setCount] = useState(0);
  // *************************************
  return (
    <div className='counter'>
      <p className='number'>
        {count}
        <span className='total'> / {totalCount}</span>
      </p>
      <button className='button'
        onClick={()=>{
          setCount((prev) => prev+1);
          onClick();
      }}>Add 1 plus</button>

      {/* 콜백값으로 사용 */}
      {/*<button className='button' onClick={()=>{*/}
      {/*  setCount((prevCount) => prevCount + 1);*/}
      {/*  setCount((prevCount) => prevCount + 1);*/}
      {/*  setCount((prevCount) => prevCount + 1);*/}
      {/*}}>Add 1이상</button>*/}
    </div>
  );
}
