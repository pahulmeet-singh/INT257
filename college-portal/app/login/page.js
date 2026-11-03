import { login } from "../actions";
import { getSession } from "../../lib/session";
import { redirect } from "next/navigation";

export default async function LoginPage({ searchParams }) {
  const session = await getSession();

  if (session) {
    redirect("/dashboard");
  }

  const params = await searchParams;
  const hasError = params?.error === "invalid";

  return (
    <main style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>College Portal Login</h1>

      <p>Enter your demo account credentials.</p>

      {hasError && (
        <p style={{ color: "red" }}>
          Invalid username or password.
        </p>
      )}

      <form action={login}>
        <div>
          <label htmlFor="username">Username</label>
          <br />
          <input
            id="username"
            name="username"
            required
            autoComplete="username"
          />
        </div>

        <br />

        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
          />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>

      <hr />

      <h3>Demo accounts</h3>
      <p>Student: student / student123</p>
      <p>Teacher: teacher / teacher123</p>
      <p>Admin: admin / admin123</p>
    </main>
  );
}