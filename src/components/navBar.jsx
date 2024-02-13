"use client";
import { signIn } from "next-auth/react";
import { Text, Button } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <div>
      <nav>
        <Text ml={10}>Flavy</Text>
        <Button
          mr={10}
          colorScheme="purple"
          variant="link"
          onClick={() => {
            signIn();
          }}
        >
          Sign In
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
    </div>
  );
}
