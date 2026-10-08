import { useState } from 'react'
import './App.css'
 
function App() {
  // STATE: each input gets its own piece of state.
  // useState returns [currentValue, functionToChangeIt]
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
 
  // DERIVED VALUES: recalculated every time the component re-renders
  const passwordsMatch = password === confirmPassword
  const canSubmit =
    fullName.trim() !== '' &&
    email.trim() !== '' &&
    password.length >= 6 &&
    passwordsMatch
 
  function handleSubmit(event) {
    event.preventDefault() // stop the browser from reloading the page
    setMessage('Form works! We will connect Supabase in Part 4.')
  }
 
  return (
    <div className="page">
      <form className="signup-card" onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        <p className="subtitle">Sign up to get started.</p>
 
        <label htmlFor="fullName">Full name</label>
        <input
          id="fullName"
          type="text"
          placeholder="Jane Doe"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
 
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
 
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="At least 6 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
 
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Type it again"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
 
        {/* CONDITIONAL RENDERING: only show the error when it applies */}
        {confirmPassword !== '' && !passwordsMatch && (
          <p className="error">Passwords do not match.</p>
        )}
 
        <button type="submit" disabled={!canSubmit}>
          Sign Up
        </button>
 
        {message && <p className="success">{message}</p>}
      </form>
    </div>
  )
}
 
export default App
