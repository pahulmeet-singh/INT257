import "server-only"
import { SignJWT,jwtVerify } from "jose"
import { cookies } from "next/headers"

const secret = process.env.SESSION_SECRET

if (!secret) {
    throw new Error("SESSION_SECRET is missing in .env.local")
}

const secretKey = new TextEncoder().encode(secret)

const COOKIE_NAME = "college-session"

export async function createSession(user) {
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 ) // 1 hour

    const token=await new SignJWT({
        role:user.role,
        name:user.name,
    })
    .setProtectedHeader({alg:"HS256"})
    .setSubject(user.id)
    .setIssuedAt()
}