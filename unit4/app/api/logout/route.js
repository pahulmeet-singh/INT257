import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function POST(request) {
    const req = await request.json();
    const cookieStore = await cookies();
    // const sessionId = cookieStore.get("sessionId");
    // if (sessionId) {
    //     cookieStore.delete("sessionId");
    //     return Response.json({ success: true });
    // } else {
    //     return Response.json({ success: false });
    // }
    cookieStore.delete("sessionId");
    redirect("/login");
}
