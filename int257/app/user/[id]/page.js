// creating functional components
//fetching the user id from the url using params and displaying it on the page.
//create async function to fetch data from the api using the user id and displaying it on the page.

export default async function User({params}){
    const {id}=await params;
    return(
        <div> 
        <h1>User ID: {id}</h1>
        </div>
    )
}