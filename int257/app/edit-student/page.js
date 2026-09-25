// now create a new function in a new file called edit-student/page.js that fetches the PUT function from the api/hello/route.js file and allows the user to edit a student's name based on their id. The function should take in the student's id and the new name as parameters, and then send a PUT request to the API with the updated data. After the request is successful, it should update the state variable to reflect the changes.

// "use client";

// import React, { useState } from "react";

// export default function EditStudent() {
//   const [students, setStudents] = useState([]);

//   async function editStudent(id, name) {
//     const res = await fetch("http://localhost:3000/api/hello", {
//       method: "PUT",
//       body: JSON.stringify({
//         id: id,
//         name: name,
//       }),
//     });

//     const data = await res.json();

//     setStudents(data.students);
//   }

//   return (
//     <div>
//       <button onClick={() => editStudent(2, "Pahul")}>
//         + Edit Student
//       </button>

//       {students.map((item) => (
//         <div key={item.id}>
//           <h1>{item.name}</h1>
//         </div>
//       ))}
//     </div>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";

export default function EditStudent() {
  const [students, setStudents] = useState([]);

  // Get all students when page loads
  useEffect(() => {
    async function getStudents() {
      const res = await fetch("http://localhost:3000/api/hello");
      const data = await res.json();
      setStudents(data);
    }

    getStudents();
  }, []);

  // Edit student
  async function editStudent(id, name) {
    const res = await fetch("http://localhost:3000/api/hello",
        {
            method: "PUT",
            body: JSON.stringify({
                id: id,
                name: name,
                course: "NEXTJS"
            })
        }
    )
    const data = await res.json();
    setStudents(data.students);
  }

  // Delete student
  async function deleteStudent() {
    const res = await fetch("http://localhost:3000/api/hello", 
        {
            method: "DELETE",
            body: JSON.stringify({
                id: 3,
                name: "Pritam Pandey",
                course:"NEXTJS"
            })
        }
    )
    const data = await res.json();
    setStudents(data.students);
  }

  return (
    <div>
        <button onClick={editStudent}>Edit Student</button>
        <br />
        <button onClick={deleteStudent}>Delete Student</button>
        {students.map((item) => (

            <div key={item.id}>
                <h1>{item.name}</h1>
                <p>{item.course}</p>
            </div>
        ))}
    </div>
  )
}