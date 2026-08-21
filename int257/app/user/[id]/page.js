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
// the reason we used async function is because we are fetching data from the api and it takes time to fetch the data. So we need to use async function to wait for the data to be fetched before rendering the component.
// in react by default, it is a client component, but in nextjs by default it is a server component. 