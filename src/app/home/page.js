import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { capitalizeFirstLetter } from "@/libs/util";
import Search from "@/app/components/search";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) return redirect("/");
  return (
    <>
      <h1> Welcome {capitalizeFirstLetter(session?.user?.name) || "User"}! </h1>
      <Search></Search>
    </>
  );
}
