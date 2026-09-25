import React from 'react'

export default async function GetStudent() {
    const res=await fetch('http://localhost:3000/api/hello')
    const data=await res.json()
  return (
    <div>
        {/* {data.map((item)=>(
            <div key={item.id}>
                <h1>{item.name}</h1>
            </div>
        ))} */}
        
        {data.map((item)=>item.name)}
    </div>
  )
}
