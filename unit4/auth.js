import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const {handlers, signIn, signOut, auth} = NextAuth({
    session:{
        strategy: "jwt",
        maxAge: 60 * 60,
    }
    },

    providers:[
        Credentials({
            credentials: {
                email:{
                    label: "Email",
                    type: "email",
                    placeholder: "student@example.com",
                },
                password:{
                    label: "Password",
                    type: "password",
                    placeholder: "Password",
                },
            },

            async authorize(credentials){
                const email = credentials?.email;
                const password = credentials?.password;

                if(
                    email === "student@example.com" && 
                    password === "Student@123"
                ) {
                    return { 
                        id: 101,
                        name: "Aarav Sharma",
                        email: "student@example.com",
                        role: "student"
                    };
                }
                return null;
            },
        }),
    ],

    callbacks:{
        async jwt({token, user}){
            if(user){
                token.id = user.id;
                token.role = user.role;
            }
            return token;
        },
        async session({session, token}){
            if(session.user){
                session.user.id = token.id;
                session.user.role = token.role;
            }
            return session;
        },
    },
    pages:{
        signIn: "/login",
    },
})
