"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Text, Button } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'




export default function NavBar() {
  const {data: session, status } =  useSession();

  let statusText = "Sign Out";
  let statusFunc = signOut;
  if (status === "unauthenticated") {
    statusText = "Sign In";
    statusFunc = signIn;
  }
  return (
    <>
      <nav>
        <Avatar></Avatar>
        <Text ml={10}>Flavy</Text>
        <Button
          mr={10}
          colorScheme="purple"
          variant="link"
          onClick={() => {
            statusFunc();
            
          }}
        >
          {statusText}
        </Button>
      </nav>
      <style jsx>
        {`
          nav {
            height: 40px;
            width: 100dvw;
            background-color: #1b1c23;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        `}
      </style>
    </>
  );
}
