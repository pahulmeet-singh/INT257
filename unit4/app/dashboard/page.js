// import React from 'react';
// import { cookies } from 'next/headers';

// export default async function Dashboard() {
//     const cookieStore = await cookies();
//     const data = cookieStore.get("sessionId");
//     if(!data){
//         redirect("/login")
//     }
//   return (
//     <div>
//         <form action="/api/logout" method="POST">
//             <p>This is my Dashboard</p>
//             <button type="submit">Logout</button>
//         </form>
//     </div>
//   )
// }


import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  async function handleLogout() {
    "use server";

    await signOut({
      redirectTo: "/login",
    });
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>Student Dashboard</h1>

      <p>Welcome, {session.user.name}!</p>

      <p>Email: {session.user.email}</p>

      <p>Student ID: {session.user.id}</p>

      <p>Role: {session.user.role}</p>

      <form action={handleLogout}>
        <button type="submit">Logout</button>
      </form>
    </main>
  );
}