import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { capitalizeFirstLetter } from "@/libs/util";
import Search from "@/app/components/search";

export default async function Home() {
  const session = await getServerSession();

  if (!session) return redirect("/");
  return (
    <>
      <h1> Welcome {capitalizeFirstLetter(session?.user?.name) || "User"}! </h1>
      <Search></Search>
    </>
  );
}
