"use client"
import React, {useState} from 'react'

export default function Login() {
    const [uname, setUname] = useState("")
    const [pass, setPass] = useState("")
  return (
    <div>
        <input name="uname" placeholder='Enter Username' onChange={(e)=>setUname(e.target.value)}/>
        <input name="pass"  placeholder='Enter Password' onChange={(e)=>setPass(e.target.value)}/>
        <button>Login</button>
        <br/>
        <p>{uname} - {pass}</p>
    </div>
  )
}
