import { requireRole } from "../../lib/dal";
import Link from "next/link";

export default async function StudentPage() {
  const user = await requireRole(["student"]);

  return (
    <main style={{ padding: "30px" }}>
      <h1>Student Dashboard</h1>
      <p>Welcome, {user.name}!</p>
      <p>You can view your marks and attendance.</p>

      <Link href="/dashboard">Back to dashboard</Link>
    </main>
  );
}