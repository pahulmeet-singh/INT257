import { getSession } from "../../../lib/session";

export async function GET() {
  const user = await getSession();

  if (!user) {
    return Response.json(
      { message: "Please log in first." },
      { status: 401 }
    );
  }

  if (user.role !== "admin") {
    return Response.json(
      { message: "You do not have permission." },
      { status: 403 }
    );
  }

  return Response.json({
    message: "Welcome, administrator!",
    adminName: user.name,
    secretReport: "This report is for admins only.",
  });
}