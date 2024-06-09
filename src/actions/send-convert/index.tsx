'use server'

import { authOptions } from "@/constants/auth-options";
import { customSession } from "@/types/auth";
import { RequestExchange, ResponseExchange } from "@/types/responses";
import { getServerSession } from "next-auth";

export default async function convert(data: RequestExchange): Promise<ResponseExchange | null> {
    const session = await getServerSession(authOptions) as customSession;
    const response = await fetch(process.env.BACKEND_URL + "/exchange-rate/change",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + session.token
            },
            body: JSON.stringify(data)
        }
    )
    if(response.ok) return await response.json()
    
    return null
}