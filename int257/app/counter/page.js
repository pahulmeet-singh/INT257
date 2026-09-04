import React from 'react'

export default function Counter() {
    let count=0
    const handleIncrement=()=>{
        count=count+1
        console.log(count)

    }
    const handleDecrement=()=>{
        count=count-1    
        console.log(count)

    }
    return (
        <div>
            <h2>Counter App</h2>
            <button onClick={handleIncrement}>+</button>
            <p>Count:{count}</p>
            <button onClick={handleDecrement}>-</button>
        </div>
    ) 
}