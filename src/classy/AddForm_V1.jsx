import React, {useState} from 'react';

export default function AddForm_V1() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // ******************************************
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  // ******************************************
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name : </label>
      <input type="text" id="name" name="name"
        value={name}
        onChange={(e)=>{
          setName(e.target.value)
        }}
      />

      <label htmlFor="email">email : </label>
      <input type="email" id="email" name="email"
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
      />

      <button type="submit">submit</button>
    </form>
  );
};