"use client"
import React, {useState} from 'react'

export default function Login() {
    const [uname, setUname] = useState("")
    const [pass, setPass] = useState("")
    const[msg, setMsg] = useState("")
    function loginUser(){
        if(uname === "admin" && pass === "1234"){
            setMsg("Login successful")
        } else {
            setMsg("Invalid credentials")
        }
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
