import { redirect } from "next/navigation";
import { capitalizeFirstLetter } from "@/libs/util";
import Search from "@/app/components/search";
import { getAuth } from "@/libs/auth";

export default async function Home() {
  const session = await getAuth();

  if (!session) return redirect("/");
  return (
    <>
      <h1> Welcome {capitalizeFirstLetter(session?.user?.name) || "User"}! </h1>
      <Search></Search>
    </>
  );
}
