export async function POST(request) {
    const data = await request.json()
    console.log(data)
    const success=true
    if(!success){
        return Response.json({
            message:"Error in adding like"
        },{status:500})
    }
    if(success){
        return Response.json({
            message:"Like added successfully"
        },{status:200})
    }
}

// why are we using post here instead of patch or put?
//  because we are creating a new resource (like) on the server, so we use POST. 
// PATCH or PUT is used to update an existing resource on the server.  