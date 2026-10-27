"use client"
import React from 'react'

export default function Login() {
  return (
    <div>
        <input name="uname" placeholder='Enter Username'/>
        <input name="pass" placeholder='Enter Password' type="password"/>
        <button>Login</button>
    </div>
  )
}
