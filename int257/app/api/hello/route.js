// export async function GET(){
//     function Response.json({
//         name:"Pahul",
//         id:1,
//         course:"B.Tech"
//     })
// }

/*
what is api and what does it do?
An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information.
In the context of web development, ***an API allows developers to interact with a server or service to retrieve or send data.*** For example, in your code snippet, the GET function is part of an API endpoint that responds to HTTP GET requests. When a client (like a web browser or another application) sends a GET request to this endpoint, the server responds with a JSON object containing information about a person named "Pahul," including their ID and course.
APIs are essential for building modern applications, as they enable integration between different services, facilitate data sharing, and allow developers to create more dynamic and interactive user experiences.

what is http and what does it do?
HTTP (Hypertext Transfer Protocol) is a protocol used for transmitting data over the internet. It defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commands. HTTP is the foundation of data communication on the World Wide Web.
When you visit a website, your browser sends an HTTP request to the server hosting that website. The server then processes the request and sends back an HTTP response, which typically includes the requested web page or data. HTTP supports various methods, such as GET (to retrieve data), POST (to send data), PUT (to update data), and DELETE (to remove data).
and we use these HTTP methods to perform CRUD operations
*/

let students = [
    {'id':1, 'name':'Pahul'},
    {'id':2, 'name':'Rohit'},
    {'id':3, 'name':'Aman'},
]

export async function GET(){
    return Response.json(students)
}

export async function POST(request){
    const data = await request.json()
    return Response.json({
        students:data,
        message:"Data has been added successfully"
    })
}

/*what adding POST is doing here if it makes no difference in the output of the GET method?
The addition of the POST method in your API allows clients to send data to the server, which can then be processed or stored. While the GET method retrieves and returns the existing list of students, the POST method enables clients to add new student data to the server.*/