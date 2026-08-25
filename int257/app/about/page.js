import{ notFound} from "next/navigation"
import Careers from "../teams/careers/page";

export default function About(){
    notFound()
    return (
        <>
        <h1>About Page</h1>
        <Careers course="PHP" />
        <Careers course="NextJs" />
        <Careers course="ReactJS" />
        </>
)}



// export default async function About(){
//     await new Promise((resolve) => setTimeout(resolve, 3000))
//     return (
//         <>
//         <h1>About Page</h1>
//         <Careers course="PHP" />
//         <Careers course="NextJs" />
//         <Careers course="ReactJS" />
//         </>
        
//     )
// }
//these are the components that we are importing from the careers page and using them in the about page.
//PROPS 
//props are used to pass data from one component to another. In this case, we are passing the course name as a prop to the Careers component.
