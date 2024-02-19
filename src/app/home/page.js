"use client";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") return redirect("/");

  return (
    <>
      <Drawer> Hello </Drawer>
      <h1> Welcome {session?.user?.name || "User"}! </h1>
    </>
  );
}
