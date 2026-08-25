"use client" // by default, all next.js components are server components. If you want to use client side features like useState, useEffect, etc. you need to add "use client" at the top of the file.
// we need error component to be a client component because we are using useState and useEffect hooks in it.
import React from "react"

export default function Error({error,reset}){
    return(
        <div>
            <h1>Error of about route</h1>
            <p>{error.message}</p>
            <button onClick={()=>reset()}>
                Try again
            </button>
        </div>
    )
}