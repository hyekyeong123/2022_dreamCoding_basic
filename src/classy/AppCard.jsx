import React from 'react';

// 외부 컨테이너 정의
export default function AppCard() {
  return (
    <>
      <Card>
        <p>Card1</p>
      </Card>

      <Card>
        <h1>Card2</h1>
        <p>설명</p>
      </Card>

      <Card>
        <img
          src="https://plus.unsplash.com/premium_photo-1664970900029-1d45e1297a54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          style={{width:100}}
        />
      </Card>
    </>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'black',
        borderRadius: '20px',
        color: 'white',
        minHeight: '200px',
        maxWidth: '200px',
        margin: '1rem',
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  );
}
