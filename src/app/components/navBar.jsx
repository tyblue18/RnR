"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Text, Button, background } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { userAgent } from "next/server";

export default function NavBar() {
  const { data: session, status } = useSession();

  let statusText = "Sign Out";
  let statusFunc = signOut;
  if (status === "unauthenticated") {
    statusText = "Sign In";
    statusFunc = signIn;
  }

  return (
    <>
      <nav>
        <Text ml={10}>Flavy</Text>
        <div>
          {status === "authenticated" ? (
            <Avatar
              name={session?.user?.name}
              src={session?.user?.image}
              size="sm"
            />
          ) : null}
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
        </div>
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
          div {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
        `}
      </style>
    </>
  );
}
