"use server";
import { redirect } from "next/navigation";
import { getAuth } from "@/libs/auth";

export default async function Page() {
  const session = await getAuth();

  if (session) redirect("/home");
  return (
    <main>
      <h1>Restaurant Rater</h1>
      <p>{session?.user?.name || "name"}</p>
    </main>
  );
}
