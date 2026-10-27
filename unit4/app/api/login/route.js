export async function POST(request) {
    const res = await request.json();
    const uname=res.username;
    const pass=res.password;
    if(uname==="admin" && pass==="1234"){
        return Response.json({success:true})
    } else {
        return Response.json({success:false})
    }
}
