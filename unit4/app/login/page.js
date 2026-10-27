"use client"
import React, {useState} from 'react'

export default function Login() {
    const [uname, setUname] = useState("")
    const [pass, setPass] = useState("")
    const[msg, setMsg] = useState("")
    function loginUser(){
        //checking credentials using api
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: uname, password: pass})
        })
        .then(response => response.json())
        .then(data => {
            if(data.success){
                setMsg("Login successful")
            } else {
                setMsg("Invalid credentials")
            }
        })
    }
  return (
    <div>
        <input name="uname" placeholder='Enter Username' onChange={(e)=>setUname(e.target.value)}/>
        <input name="pass"  placeholder='Enter Password' onChange={(e)=>setPass(e.target.value)}/>
        <button onClick={loginUser}>Login</button>
        <br/>
        <h3>{msg}</h3>
    </div>
  )
}
