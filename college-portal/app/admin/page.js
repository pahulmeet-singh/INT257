import { requireRole } from "../../lib/dal";
import Link from "next/link";

export default async function AdminPage() {
  const user = await requireRole(["admin"]);

  return (
    <main style={{ padding: "30px" }}>
      <h1>Administrator Dashboard</h1>
      <p>Welcome, {user.name}!</p>
      <p>You can manage users and portal settings.</p>

      <Link href="/dashboard">Back to dashboard</Link>
    </main>
  );
}