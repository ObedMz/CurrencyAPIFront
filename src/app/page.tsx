'use client'
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#111111]">
      <h1 className="text-6xl ">Welcome</h1>
      <button className="m-auto p-1 bg-[#6366F1] px-4 py-2 rounded hover:bg-opacity-55"
      onClick={async() => await signIn('credentials', {callbackUrl: "/dashboard"})}
      >logIn</button>
    </main>
  );
}
