import React, {useState} from 'react';

export default function AddForm() {
  const [form, setForm] = useState(initForm);
// ******************************************
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const inputChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

// ******************************************
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name : </label>
      <input type="text" id="name" name="name"
        value={form.name} onChange={inputChange}
      />

      <label htmlFor="email">email : </label>
      <input type="email" id="email" name="email"
        value={form.email} onChange={inputChange}
      />

      <button type="submit">submit</button>
    </form>
  );
};
// ******************************************
const initForm = {
  name : '',
  email : ''
}