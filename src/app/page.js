import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/home");
  return (
    <main>
      <h1>Restaurant Rater</h1>
      <p>{session?.user?.name || "name"}</p>
    </main>
  );
}
