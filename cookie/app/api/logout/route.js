import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function POST(request) {
    const cookieStore = await cookies();
    cookieStore.delete("sessionId");
    redirect("/login");
}
