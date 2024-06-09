import { customSession, customUser } from "@/types/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions } from "next-auth"

export const authOptions : NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {},
           async authorize(credentials): Promise<customUser | null> {
                const res = await fetch(process.env.BACKEND_URL+"/auth/token", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                })
                if (res.ok) {
                    const data = await res.json();
                    console.log(data)
                    return { id: "1", token: data.token };
                  }
                return null
            },
        }),
    ],
    session: {
        maxAge: 1440000
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                console.log(user)
                token.jwt = (user as customUser).token
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                (session as customSession).token = token.jwt as string
            }
            return session
        },
    },
    pages: {
        signIn: "/",
    }
}