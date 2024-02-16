import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();
  console.log("---", session);
  if (session) redirect("/home");
  return (
    <main>
      <h1>Restaurant Rater</h1>
      <p>{session?.user?.name || "name"}</p>
    </main>
  );
}
