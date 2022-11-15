import React, {useState} from 'react';
import './css/AppXY.css';

export default function AppXY_S() {

  // 연관 있는 데이터는 객체로 보관
  const [position, setPosition] = useState(
    {
      x:0,
      y:0,
      z:0
    }
  );
  // ******************************************
  const handleMouseMove = (e) => {
    //  마우스의 좌표는 clientX와 clientY를 이용해 알수 있다. -> 브라우저 window의 좌표값 위치를 전달한다.
    // setPosition({x:e.clientX, y : e.clientY});

    // 만약 수평으로만 이동이 가능하다면?
    setPosition(prev => ({...prev, x:e.clientX}));
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
        style={{transform : `translate(${position.x}px, ${position.y}px)`}}
      ></div>
    </div>
  );
};