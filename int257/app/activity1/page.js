// activity: fetch user's data json using fetch api and client side rendering in next js, and display the data.
export default async function Activity1(){
    const response= await fetch(`https://jsonplaceholder.typicode.com/users`,
        {cache: "no-store"})
    const data=await response.json()
    return(
        <div> 
        {data.map((item) => (
            <ul key={item.id}>
                <li><strong>Name: </strong>{item.name}</li>
                <li><strong>Username: </strong>{item.username}</li>
                <li><strong>Email: </strong>{item.email}</li>
                <li>------------------------------------------</li>
            </ul>
        ))}
        </div>
    )
}