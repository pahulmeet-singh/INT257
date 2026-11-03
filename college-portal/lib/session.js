import "server-only"
import { SignJWT,jwtVerify } from "jose"
import { cookies } from "next/headers"

const secret = process.env.SESSION_SECRET

if (!secret) {
    throw new Error("SESSION_SECRET is missing in .env.local")
}

const secretKey = new TextEncoder().encode(secret)

