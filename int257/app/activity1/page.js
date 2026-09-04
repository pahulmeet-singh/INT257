// activity: fetch user's data json using fetch api and client side rendering in next js, and display the data.
// export default async function Activity1(){
//     const response= await fetch(`https://jsonplaceholder.typicode.com/users`,
//         {cache: "no-store"})
//     const data=await response.json()
//     return(
//         <div> 
//         {data.map((item) => (
//             <ul key={item.id}>
//                 <li><strong>ID: </strong>{item.id}</li>
//                 <li><strong>Name: </strong>{item.name}</li>
//                 <li><strong>Username: </strong>{item.username}</li>
//                 <li>------------------------------------------</li>
//             </ul>
//         ))}
//         </div>
//     )
// }



//CLIENT SIDE RENDERING
"use client"
import React, {useEffect} from 'react'

export default async function Activity1(){
    useEffect(() => {

    },[])
    // const response= await fetch(`https://jsonplaceholder.typicode.com/users`)
//     return(
//         <div> 
//         {data.map((item) => (
//             <ul key={item.id}>
//                 <li><strong>ID: </strong>{item.id}</li>
//                 <li><strong>Name: </strong>{item.name}</li>
//                 <li><strong>Username: </strong>{item.username}</li>
//                 <li>------------------------------------------</li>
//             </ul>
//         ))}
//         </div>
//     )
// }




// all react components by defult only send a single html element. 
// client componenet cannot return promise, it can asynchronously fetch data but it cannot return a promise.
// so our request is going to the 

//client comp cannot be async and server component can be async.

// because client can return div it cannot return promise, 
// and server component can return promise because it can be async.
// because whatever request is going , it is not going the browser, it is going to the server. so server component can be async and client component cannot be async.


// [] this dependecy means it will only run once when your compoonent renders
