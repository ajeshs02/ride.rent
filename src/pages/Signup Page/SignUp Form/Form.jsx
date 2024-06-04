import React, { useState } from 'react'
import './Form.scss'

const Form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    // You can add logic to handle form submission here
  }

  return (
    <div className="form-container">
      <h3>
        Join <span>Ride.Rent</span>
      </h3>
      <form onSubmit={onSubmit} className="form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">List your vehicles for FREE</button>
      </form>
    </div>
  )
}

export default Form
