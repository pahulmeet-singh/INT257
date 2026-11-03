import { requireRole } from "../../lib/dal";
import Link from "next/link";

export default async function TeacherPage() {
  const user = await requireRole(["teacher", "admin"]);

  return (
    <main style={{ padding: "30px" }}>
      <h1>Teacher Dashboard</h1>
      <p>Welcome, {user.name}!</p>
      <p>You can manage classes and student marks.</p>

      <Link href="/dashboard">Back to dashboard</Link>
    </main>
  );
}