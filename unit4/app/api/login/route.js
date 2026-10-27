import { cookies } from "next/headers";

export async function POST(request) {
    const req = await request.json();

    const uname = req.username;
    const password = req.password;

    if (uname === "admin" && password === "1234") {
        const sessionId="abc123" // generate a unique session ID for the user
        const cookieStore=await cookies()
        cookieStore.set("sessionId", sessionId,{
            httpOnly:true,
            maxAge:60*60 // 1 hour
        })
        return Response.json({ success: true });
    } else {
        return Response.json({ success: false });
    }
}
