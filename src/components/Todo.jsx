import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import './styles.css'
import { UserAuth } from '../context/AuthContext'
import { Trash } from "phosphor-react"
import "./todo.css"

export default function Todo() {

    // Account
    const { user , logout } = UserAuth()
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            await logout()
            alert("You are logged out!!")
            navigate('/')
        } catch(e) {
            console.log(e.message)
        }
    }

    const [ todos , setTodos ] = useState([]);
    const [ content , setContent ] = useState("");

    const addToDo = (todo) => {
        const newTodo = {
            id: Math.random(),
            todo: todo
        }
        if ( content === "" ) {
            alert("No todo inputed")
        } else {
            setTodos([ ...todos , newTodo ])

            setContent("")
        }
    }
    const removeTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
    }
    const clearAllTodos = () => {
        setTodos([])
    }
    const handleClick = (e) => {
        e.preventDefault()
        addToDo(content)
    }

    
    const totalTodos = todos.length


    return (
        <>
        <div className='accountPage'>
        <h2 className="accountMText">Account</h2>
        <p className="acccountEmail">Email: {user && user.email}</p><button className='accountButton' onClick={handleLogout}>Logout</button>
        </div>

        <form className="todoForm">
            <h2 className="todoH2">To-Do App</h2>
            <p className="tasksCounter">tasks left: {totalTodos}</p>

            
            <input className="todoInput" type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="input your todo here..."/><br />
            <button className="todoBtn" type="submit" onClick={handleClick}>Add Todo</button>
        </form>
        <Trash size={60} onClick={clearAllTodos} className="mainTrash"/>
        {
            totalTodos === 0 ?
            <p className="noTodosText">No todos yet</p> :
            <ul>
            {
                todos.map((todo) => {
                    return <li key={todo.id} >
                        {todo.todo}
                        <Trash className="littleTrash" size={20} onClick={() => {removeTodo(todo.id)}}/>
                    </li>
                })
            }
        </ul>
        }
        </>
    )
}
