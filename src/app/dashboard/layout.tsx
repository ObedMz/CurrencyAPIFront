import { authOptions } from "@/constants/auth-options";
import { customSession } from "@/types/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Layout({children}: {children: React.ReactNode}) {
    const session = await getServerSession(authOptions) as customSession;
    if(!session) redirect("/");
    
    return (
       <>
        {children}
        </>
    )
}