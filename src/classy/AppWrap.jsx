import React from 'react';
export default function AppWrap() {
// ******************************************
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://plus.unsplash.com/premium_photo-1664970900029-1d45e1297a54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          name="정혜경"
          size={200}
        />
      </Navbar>
    </div>
  );
};
// ******************************************
function Navbar({children}){
  return(
    <header style={{backgroundColor:'yellow'}}>
      {children}
    </header>
  )
}

function Avatar({image, name, size}) {
  return (
    <div className="avatar">
      <img
        src={image}
        alt={name}
        width={size}
        height={size}
        style={{borderRadius:'50%'}}
      />
    </div>
  );
};