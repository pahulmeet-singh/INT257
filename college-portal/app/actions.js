"use server";

import { redirect } from "next/navigation";
import { createSession, deleteSession } from "../lib/session";

const demoUsers = [
  {
    id: "101",
    name: "Aarav Student",
    username: "student",
    password: "student123",
    role: "student",
  },
  {
    id: "102",
    name: "Priya Teacher",
    username: "teacher",
    password: "teacher123",
    role: "teacher",
  },
  {
    id: "103",
    name: "Admin User",
    username: "admin",
    password: "admin123",
    role: "admin",
  },
];

export async function login(formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  if (
    typeof username !== "string" ||
    typeof password !== "string" ||
    !username.trim() ||
    !password
  ) {
    redirect("/login?error=invalid");
  }

  const user = demoUsers.find(
    (item) =>
      item.username === username.trim() &&
      item.password === password
  );

  if (!user) {
    redirect("/login?error=invalid");
  }

  await createSession(user);

  if (user.role === "student") {
    redirect("/student");
  }

  if (user.role === "teacher") {
    redirect("/teacher");
  }

  if (user.role === "admin") {
    redirect("/admin");
  }

  redirect("/login");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}


