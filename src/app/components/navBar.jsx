"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Text, Button, Flex } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";
import { capitalizeFirstLetter } from "@/libs/util";
import style from "@/app/styles/navBar.module.css";
import { redirect } from "next/navigation";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  let statusText = "Sign Out";
  let statusFunc = signOut;
  if (status === "unauthenticated") {
    statusText = "Sign In";
    statusFunc = signIn;
  }

  return (
    <>
      <nav className={style.nav}>
        <Button
          ml={10}
          variant="ghost"
          color="white"
          onClick={() => {
            window.location.replace("http://localhost:3000/home");
          }}
        >
          Flavy
        </Button>
        <div className={style.rightSection}>
          {status === "authenticated" ? (
            <>
              <Menu>
                <MenuButton
                  as={Avatar}
                  size="sm"
                  name={session?.user?.name}
                  src={session?.user?.image}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  mr={3}
                />
                <MenuList>
                  <Flex align="center" justify="center">
                    <Avatar
                      name={capitalizeFirstLetter(session?.user?.name)}
                      src={session?.user?.image}
                      size="lg"
                      mr={3}
                    ></Avatar>
                    <h1 className={style.headerText}>
                      {" "}
                      Happy eating{" "}
                      {capitalizeFirstLetter(session?.user?.name) ||
                        "User"}!{" "}
                    </h1>
                  </Flex>
                  <MenuItem
                    onClick={() => {
                      window.location.replace("http://localhost:3000/profile");
                      setIsMenuOpen(false);
                    }}
                    color="black"
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      statusFunc();
                      setIsMenuOpen(false);
                    }}
                    color="red"
                  >
                    Sign Out
                  </MenuItem>
                </MenuList>
              </Menu>
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
    </>
  );
}
