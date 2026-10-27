export async function POST(request) {
    const data = await request.json();
    const uname=data.username;
    const pass=data.password;
    if(uname==="admin" && pass==="1234"){
        return Response.json({success:true})
    } else {
        return Response.json({success:false})
    }
}
