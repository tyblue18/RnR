"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Text, Button, Flex } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useState } from "react";
import { capitalizeFirstLetter } from "@/libs/util";
import style from "@/app/styles/navBar.module.css";

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
        <Text ml={10}>Flavy</Text>
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
                      statusFunc();
                      setIsMenuOpen(false);
                    }}
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
