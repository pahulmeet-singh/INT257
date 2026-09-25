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

// now create a new function in a new file called edit-student/page.js that fetches the PUT function from the api/hello/route.js file and allows the user to edit a student's name based on their id. The function should take in the student's id and the new name as parameters, and then send a PUT request to the API with the updated data. After the request is successful, it should update the state variable to reflect the changes.
