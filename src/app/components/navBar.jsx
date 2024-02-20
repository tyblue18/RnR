"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Text, Button, Flex } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { capitalizeFirstLetter } from "@/libs/util";

export default function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
            <>
              <Avatar
                name={session?.user?.name}
                src={session?.user?.image}
                size="sm"
                onClick={() => setIsDrawerOpen(true)}
                mr={3}
              />
              <Drawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                placement="right"
              >
                <DrawerOverlay background="#black" />

                <DrawerContent>
                  <DrawerCloseButton />
                  {
                    <>
                      <Flex align="center" justify="center">
                        <Avatar
                          name={capitalizeFirstLetter(session?.user?.name)}
                          src={session?.user?.image}
                          size="lg"
                          mr={3}
                        ></Avatar>
                        <h1>
                          {" "}
                          Happy eating{" "}
                          {capitalizeFirstLetter(session?.user?.name) || "User"}
                          !{" "}
                        </h1>
                      </Flex>
                      <Button
                        mt={4}
                        colorScheme="purple"
                        variant="outline"
                        onClick={() => {
                          statusFunc();
                          setIsDrawerOpen(false);
                        }}
                      >
                        Sign Out
                      </Button>
                    </>
                  }
                </DrawerContent>
              </Drawer>
            </>
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
          h1 {
            background-color: black;
          }
        `}
      </style>
    </>
  );
}
