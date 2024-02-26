"use client";
import { useRef } from "react";
import {
  Drawer as ChakraDrawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
} from "@chakra-ui/react";
import UsersList from "./userList";
import { useDisclosure } from "@chakra-ui/react";

export default function Drawer({ users }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <>
      <Button ref={btnRef} onClick={onOpen} mt={4} variant="outline" size="sm">
        Friends List
      </Button>
      <ChakraDrawer
        placement={"left"}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Friends List</DrawerHeader>
          <DrawerBody>
            {/* drawer content */}
            <UsersList users={users} />
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
}
