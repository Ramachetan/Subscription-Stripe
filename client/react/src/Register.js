import React, { useState } from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';

const Register = (props) => {
  const [email, setEmail] = useState('rama.chetan@example.com');
  const [customer, setCustomer] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {customer} = await fetch('/create-customer', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    }).then(r => r.json());

    setCustomer(customer);
  };

  if(customer) {
    return <Redirect to={{pathname: '/prices'}} />
  }

  return (
    <main>
      <h1>Sample Product</h1>

      <img src="https://picsum.photos/280/320?random=4" alt="picsum generated" width="140" height="160" />

      <p>
        Product Subtext
      </p>

      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </label>

        <button type="submit">
          Register
        </button>
      </form>
    </main>
  );
}

export default Register;
