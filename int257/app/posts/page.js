// fetching data from an API and rendering it in a React component.

// export default async function Posts(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts",
//         {cache:"no-store"})//this will fetch the data from the api and cache it in the server. we are using no-store because we want to fetch the data every time the page is loaded.

//     console.log(response)
//     const data = await response.json()
//     console.log(data)
//     return(
//         <h1> Posts Data</h1>
//     )
// }

// since this is server side rendering, we can use async function to fetch the data from the api and render it in the component. We can also use useEffect hook to fetch the data from the api and render it in the component. But since this is server side rendering, we don't need to use useEffect hook. We can directly fetch the data from the api and render it in the component.
// we are using async function because we are fetching data from the api and it takes time to fetch the data. So we need to use async function to wait for the data to be fetched before rendering the component.


// we are using map function to iterate over the data and display only the titles.
//now we'll display not the entire 100 posts data but just the titles using map function

// export default async function Posts(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts",
//         {cache:"no-store"})//this will fetch the data from the api and cache it in the server. we are using no-store because we want to fetch the data every time the page is loaded.

//     // console.log(response)
//     const data = await response.json()
//     console.log(data)
//     return(
//         <>
//         <h1> Posts Data</h1>
//         {data.map((item)=>item.title)}
//         </>
//     )
// }



// now well just show one user's data
// 
export default async function Posts(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1",
        {cache:"no-store"})//this will fetch the data from the api and cache it in the server. we are using no-store because we want to fetch the data every time the page is loaded.

    // console.log(response)
    const data = await response.json()
    console.log(data)
    return(
        <>
        <h1> Posts Data</h1>
        <pre>Happy Birthday {data.name}</pre>
        </>
    )
}
