import { Input } from "@chakra-ui/react";

export default async function Search() {
  const res = await fetch("http://localhost:3000/api/user");
  const data = await res.json();
  console.log(data);
  return <Input placeholder="search user..."></Input>;
}
