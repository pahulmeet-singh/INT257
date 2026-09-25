"use client"
import React,{useState} from 'react'

export default function AddStudent() {
    const [students, setStudents] = useState([])
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
        setStudents(data.students)
    }

  return (
    <div>
        <button onClick={addStudent}> + Add Student </button>
        {students.map((item)=>(
            <div key={item.id}>
                <h1>{item.name}</h1>
                <p>{item.course}</p>
            </div>
        ))}
    </div>
  )
}

//data variable is not defined in this component, so the mapping over data will throw an error. You need to fetch the data and store it in a state variable to render it properly.

