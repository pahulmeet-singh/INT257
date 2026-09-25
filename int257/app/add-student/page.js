"use client"
import React from 'react'

export default function AddStudent() {
    async function addStudent(){
        const res=await fetch('http://localhost:3000/api/hello',
            {
                method:"POST",
                body:JSON.stringify({
                    id:4,
                    name:"Pahul",
                    course:"MERN"
                })
            }
        )
        const data=await res.json()
        console.log(data)
    }

  return (
    <div>
        <button onClick={addStudent}> + Add Student </button>
        {data.map((item)=>(
            <div key={item.id}>
                <h1>{item.name}</h1>
                <p>{item.course}</p>
            </div>
        ))}
    </div>
  )
}
