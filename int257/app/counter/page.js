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

// what is next js and what are server components and client components in next js

// Next.js is a React framework that enables developers to build server-rendered React applications with ease. It provides features like automatic code splitting, server-side rendering (SSR), static site generation (SSG), and API routes, making it a powerful tool for building modern web applications.

// In Next.js, components can be classified into two types: server components and client components.

// Server Components:
// Server components are rendered on the server and sent to the client(or browser) as HTML. They are useful for fetching data from a database or an API, as they can run server-side code. Server components do not have access to browser APIs or state management hooks like useState or useEffect. They are typically used for rendering static content or data that does not change frequently.

// Client Components:
// Client components are rendered on the client-side and can use browser APIs and state management hooks. They are useful for building interactive user interfaces that require dynamic behavior, such as handling user input or updating the UI based on user actions. Client components can also fetch data from APIs, but they do so on the client-side, which may result in slower performance compared to server components.   

// in react, by default all components are client components, 
// but in next js, by default all components are server components. 
// To make a component a client component, you need to add the "use client" directive at the top of the file. This tells Next.js to treat the component as a client component and allows it to use browser APIs and state management hooks.