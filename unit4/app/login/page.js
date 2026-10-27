"use client"
import React, {useState} from 'react'

export default function Login() {
    const [uname, setUname] = useState("")
    const [pass, setPass] = useState("")
    const[msg, setMsg] = useState("")
    async function loginUser(){
        //checking credentials using api
        const res = await fetch("/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username:uname,
                password:pass
            })
        })
        const data=await res.json()
        if(data.success){
            setMsg("Login Successful")
        } else {
            setMsg("Login Failed")
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
