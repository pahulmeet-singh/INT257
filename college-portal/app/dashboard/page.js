import Link from "next/link";
import { verifySession } from "../../lib/dal";
import { logout } from "../actions";

export default async function DashboardPage() {
  const user = await verifySession();

  return (
    <main style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>College Portal Dashboard</h1>

      <p>Welcome, {user.name}!</p>
      <p>Your role is: {user.role}</p>

      <h2>Available pages</h2>

      <ul>
        <li><Link href="/student">Student page</Link></li>
        <li><Link href="/teacher">Teacher page</Link></li>
        <li><Link href="/admin">Admin page</Link></li>
      </ul>

      <form action={logout}>
        <button type="submit">Logout</button>
      </form>
    </main>
  );
}