"use server"
export async function addUser(formData){
    const name=formData.get("name")
    const email=formData.get("email")
    console.log(name)
    console.log(email)
}

