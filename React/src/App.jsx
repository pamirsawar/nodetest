import { useState } from "react";

function App() {

  const [form, setForm] = useState({
    amount: 0,
    description: '',
    date: ''
  });

  async function handleForm(e) {
    e.preventDefault();
    console.log('form', form);
    fetch('http://localhost:4000/transaction', {
      method: 'POST',
      body: form
    })
  }

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="number" onChange={handleInput} name="amount" value={form.amount} placeholder="Enter transaction amount" />
        <input type="text" onChange={handleInput} name="description" value={form.description} placeholder="Enter transaction details" />
        <input type="date" onChange={handleInput} name="date" value={form.date} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
