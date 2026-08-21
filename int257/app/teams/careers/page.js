export default function Careers({course}){
    return(
        <>
        <h1> This is my careers page</h1>
        <p>Course: {course}</p>

        </>
    )
}
// here we are creating a functional component called Careers that takes in a prop called course. The component returns a JSX element that displays the course name passed as a prop.
//PROPS
//props are used to pass data from one component to another. In this case, we are passing the course name as a prop to the Careers component.