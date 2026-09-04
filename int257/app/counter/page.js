import React from 'react'

export default function Counter() {
    const {count,setCount}=useState(0)
    return (
        <div>
            <h2>Counter App</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <p>Count:{count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    ) 
}