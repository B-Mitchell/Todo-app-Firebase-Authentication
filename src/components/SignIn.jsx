import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import "./styles.css"
import { UserAuth } from '../context/AuthContext'

export default function SignIn() {
  const [ email , setEmail ] = useState("")
  const [ password , setPassword ] = useState("")
  const [ error , setError ] = useState("")
  const navigate = useNavigate()

  const { signInn } = UserAuth()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
        await signInn( email , password)
        alert("login successful")
        navigate('/Account')
    } catch(e) {
        setError(e.message)
        alert(e.message)
        console.log("not running")
        console.log(error)
    }
  }

  return (
    <div>
    <div className='login'>
      <h2>Login to your Account</h2>
    <form onSubmit={handleSubmit}>
      <input type="email" className='text' name="username" onChange={(e) => setEmail(e.target.value)}/>
      <span>Email</span>
      <br />
      <br />
      <input type="password" className='text' name="password" onChange={(e) => setPassword(e.target.value)}/>
      <span>password</span>
      <br />
      <button className='signin'>
      Sign In
      </button>
      <p className='signUpL'>Don't have an account?</p>
      <Link to="/" className='link'>Sign Up</Link>
      <hr />
    </form>
    </div>
    </div>
  )
}
