import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import AppBar from "./Components/AppBar";
import TransactionForm from "./Components/TransactionForm";
function App() {

  const initialForm = {
    amount: 0,
    description: '',
    date: ''
  };
  const [form, setForm] = useState(initialForm);

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions() {
    const res = await fetch('http://localhost:4000/transaction');
    const { data } = await res.json();
    setTransactions(data);
  }

  async function handleForm(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/transaction', {
      method: 'POST',
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    if (res.ok) {
      setForm(initialForm);
      fetchTransactions();
    }
  }

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <AppBar />
      <TransactionForm />
      <form onSubmit={handleForm}>
        <input type="number" onChange={handleInput} name="amount" value={form.amount} placeholder="Enter transaction amount" />
        <input type="text" onChange={handleInput} name="description" value={form.description} placeholder="Enter transaction details" />
        <input type="date" onChange={handleInput} name="date" value={form.date} />
        <button type="submit">Submit</button>
      </form>
      <section>
        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((trx) => (
              <tr key={trx._id}>
                <td>{trx.amount}</td>
                <td>{trx.description}</td>
                <td>{trx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div >
  )
}

export default App
