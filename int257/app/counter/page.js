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

// # Doing this way is not recommended because it will cause the entire component to re-render every time the state changes, which can lead to performance issues in larger applications. Instead, you can use the useState hook to manage the state of the counter and only re-render the parts of the component that need to be updated.



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