// using props to pass data from parent to child component
export default function({name}){
    return(
        <h1>welcome, {name}</h1>
        
    )
}
<Greeting name="John" /> // passing data to the child component
// {/* <Greeting name="Jane" /> // passing data to the child component . this is not allowed in the app directory. you can only use one component per file. to fix this error, you can create a new file for each component and import them into the parent component. */}