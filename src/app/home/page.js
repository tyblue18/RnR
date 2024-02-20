"use client";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { capitalizeFirstLetter } from "../components/navBar.jsx";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") return redirect("/");

  return (
    <>
      <h1> Welcome {capitalizeFirstLetter(session?.user?.name) || "User"}! </h1>
    </>
  );
}
