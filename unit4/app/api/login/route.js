export async function POST(request) {
    const data = await request.json();

    const username = data.username;
    const password = data.password;

    if (username === "admin" && password === "1234") {
        return Response.json({ success: true });
    } else {
        return Response.json({ success: false });
    }
}
