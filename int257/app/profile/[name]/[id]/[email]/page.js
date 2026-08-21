//now we have to fetch multiple things from the route
// /profile/[name]/[id]/[email] and display them on the page.
export default async function Profile({params}){
    const {name,id,email}=await params;
    return(
        <div>
            <h1>Profile Page</h1>
            <p>Name: {name}</p>
            <p>ID: {id}</p>
            <p>Email: {decodeURIComponent(email)}</p>
        </div>
    )
}
// to account for percent encoding in the url, we have to use decodeURIComponent() function to decode the values of name, id and email before displaying them on the page.
// it can be used like this: decodeURIComponent(name), decodeURIComponent(id), decodeURIComponent(email)
