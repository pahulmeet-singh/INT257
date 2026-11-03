import "server-only"
import { redirect } from "next/navigation"
import { getSession } from "./session"

export async function verifySession(){
    const session = await getSession()
    if(!session){
        redirect("/login")
    }
    return session
}

export async function requireRole(allowedRoles){
    const session = await verifySession()
    if(!allowedRoles.includes(session.role)){
        redirect("/dashboard")
    }
    return session
}

