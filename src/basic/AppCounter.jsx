import React, {useState} from 'react';
import Counter from "./components/Couter";

// 버튼을 클릭하면 숫자가 하나씩 증가하는 컴포넌트
export default function AppCounter() {

  // 공통데이터는 부모에게
  const [totalCount, setTotalCount] = useState(0);
  const handleClick = () => {
    setTotalCount((prev) => prev + 1);
  }
  // *******************************
  return (
    <div className='container'>
      <div className='banner'>
        Total Count : {totalCount} {totalCount > 10? 'fire' : 'ice'}
      </div>
      <div className='counters'>
        <Counter
          totalCount={totalCount}
          onClick={handleClick}
        />
        <Counter
          totalCount={totalCount}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};