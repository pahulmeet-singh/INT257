export const revalidate=900

export default async function Portal(){
    const response= await fetch("https://jsonplaceholder.typicode.com/posts",{
        next:{revalidate:900}
    })
    const data= await response.json()
    return(
        <div>
            <h1>Research Portal</h1>
        </div>
    )
}