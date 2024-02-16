"use client";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") return redirect("/");

  return (
    <>
      <h1> Welcome {session?.user?.name || "User"}! </h1>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}
