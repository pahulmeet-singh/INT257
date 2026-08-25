"use client"
import React from "react"

export default function Error({error,reset}){
    return(
        <div>
            <h1>Error of Profile Route</h1>
            <p>{error.message}</p>
            <button onClick={() => reset()}>
                Try again
            </button>
        </div>
    )
}
