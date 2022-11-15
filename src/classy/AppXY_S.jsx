import React, {useState} from 'react';
import './css/AppXY.css';

export default function AppXY_S() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  // ******************************************
  const handleMouseMove = (e) => {
    // 마우스의 좌표는 clientX와 clientY를 이용해 알수 있다. -> 브라우저 window의 좌표값 위치를 전달한다.
    setX(e.clientX);
    setY(e.clientY);
  }
  // ******************************************
  return (
    <div
      className='container'
      onPointerMove={(e)=>{
        handleMouseMove(e);
      }}
    >
      <div
        className='pointer'
        style={{transform : `translate(${x}px, ${y}px)`}}
      ></div>
    </div>
  );
};