"use client"
import React from 'react'
import { addUser } from '../actions'

export default function StudentForm() {
  return (
    <div>
        <form action={addUser}>
            <input type='text' name="name" placeholder="Enter your name"/>
            <input type='text' name="email" placeholder="Enter your email"/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
