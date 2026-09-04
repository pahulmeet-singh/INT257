// "use client"
// import React from "react"
// export default function Counter() {
//     const [count, setCount] = React.useState(0)

//     const handleIncrement = () => {
//         setCount(count + 1)
//     }

//     const handleDecrement = () => {
//         setCount(count - 1)
//     }
//     return (
//         <div>
//             <h2>Counter App</h2>
//             <button onClick={handleIncrement}> + </button>
//             <p>Count: {count}</p>
//             <button onClick={handleDecrement}> - </button>
//         </div>
//     ) 
// }


"use client"
import {useState} from "react"
export default function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>Counter App</h2>
            <button onClick={() => setCount(count + 1)}> + </button>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count - 1)}> - </button>
        </div>
    ) 
}