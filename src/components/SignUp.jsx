import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./styles.css"
import { UserAuth } from '../context/AuthContext'

export default function SignUp() {

    const [ email , setEmail ] = useState("")
    const [ password , setPassword ] = useState("")
    const [ error , setError ] = useState("")
    const navigate = useNavigate()
    const { createUser } = UserAuth()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await createUser( email , password)
            console.log("Accounct creation successful")
            navigate('/Account')
        } catch(e) {
            setError(e.message)
            alert(error)
            console.log(error)
        }
    }
  return (
    <div>
    <div className='login'>
    <h2>Create an Account</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" className='text' name="username" onChange={(e) => setEmail(e.target.value)}/>
        <span>Email</span>
        <br />
        <br />
        <input type="password" className='text' name="password" onChange={(e) => setPassword(e.target.value)}/>
        <span>password</span>
        <br />
        <button className='signin'>
        Sign Up
        </button>
        <p className='signUpL'>Already have an account?</p>
        <Link to="/SignIn" className='link'>Sign In</Link>
        <hr />
    </form>
    </div>
    </div>
  )
}
