// "use client"
// import { useRouter } from 'next/navigation'
// import React, {use, useState} from 'react'

// export default function Login() {
//     const [uname, setUname] = useState("")
//     const [password, setPassword] = useState("")
//     const[msg, setMsg] = useState("")
//     const route=useRouter()
//     async function loginUser(){
//         //checking credentials using api
//         const res = await fetch("/api/login",{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body: JSON.stringify({
//                 username: uname,
//                 password: password
//             })
//         })
//         // const response = await res.json
//         if(res.ok){
//             setMsg("Login Successful")
//             route.push("/dashboard")
//         } else {
//             setMsg("Login Failed")
//         }
//     }
//   return (
//     <div>
//         <input name="uname" placeholder='Enter Username' onChange={(e)=>setUname(e.target.value)}/>
//         <input name="password"  placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
//         <button onClick={loginUser}>Login</button>
//         <br/>
//         <h3>{msg}</h3>
//     </div>
//   )
// }


"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password.");
        return;
      }

      if (result?.ok) {
        router.push("/dashboard");
        router.refresh();
      } else {
        setError("Login failed. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ maxWidth: "400px", margin: "60px auto" }}>
      <h1>Student Login</h1>

      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            required
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginTop: "6px",
            }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            required
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginTop: "6px",
            }}
          />
        </div>

        {error && (
          <p style={{ color: "red" }}>{error}</p>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p style={{ marginTop: "20px" }}>
        Demo email: student@example.com
      </p>

      <p>Demo password: Student@123</p>
    </main>
  );
}