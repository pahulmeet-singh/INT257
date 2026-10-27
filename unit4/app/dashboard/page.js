import React from 'react';

export default async function Dashboard() {
    const cookieStore = await cookies();
    const data = cookieStore.get("sessionId");
    if(!data){
        redirect("/login")
    }
  return (
    <div>
        <form action="/api/logout" method="POST">
            <p>This is my Dashboard</p>
            <button type="submit">Logout</button>
        </form>
    </div>
  )
}

