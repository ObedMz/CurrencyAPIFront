'use server'

import { authOptions } from "@/constants/auth-options"
import { customSession } from "@/types/auth"
import { ResponseExchange } from "@/types/responses"
import { getServerSession } from "next-auth"

export default async function getAll(): Promise<ResponseExchange[] | null> {
    const session = await getServerSession(authOptions) as customSession
    const response = await fetch(process.env.BACKEND_URL + '/exchange-rate',
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session.token}`
        }
    });
    if(response.ok){
        return await response.json()
    }

    return null
}