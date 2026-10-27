"use client"
import { useRouter } from 'next/navigation'
import React, {use, useState} from 'react'

export default function Login() {
    const [uname, setUname] = useState("")
    const [pass, setPass] = useState("")
    const[msg, setMsg] = useState("")
    const route=useRouter()
    async function loginUser(){
        //checking credentials using api
        const res = await fetch("/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username:uname,
                pass:pass
            })
        })
        if(res.success){
            setMsg("Login Successful")
            route.push("/dashboard")
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
