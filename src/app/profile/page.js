import { getAuth } from "@/libs/auth";
import {
  Avatar,
  Text,
  Flex,
  Card,
  CardBody,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import UsersList from "@/app/components/userList";
import Style from "@/app/styles/navBar.module.css";
import { capitalizeFirstLetter } from "@/libs/util";
import { redirect } from "next/navigation";
import Drawer from "@/app/components/drawer";

export default async function ProfilePage() {
  const session = await getAuth();

  if (!session) redirect("/");

  const users = await fetch("http://localhost:3000/api/user")
    .then((res) => res.json())
    .then((res) => {
      return res.filter((user) => user.email != session.user.email);
    });

  return (
    <Flex>
      <Card maxW="sm" borderWidth="1px" overflow="hidden" mr={10}>
        <CardBody>
          <Flex p={4} alignItems="center" borderBottom="1px solid black">
            <Avatar
              name={capitalizeFirstLetter(session?.user?.name)}
              src={session?.user?.image}
              size="lg"
              mr={4}
              borderColor="black.500"
              borderWidth="2px"
            />
            <Flex flexDirection="column">
              <Text> Name: {capitalizeFirstLetter(session?.user?.name)}</Text>
              <Text>Email: {capitalizeFirstLetter(session?.user?.email)}</Text>
            </Flex>
            <div style={{ borderBottom: "1px solid black" }}></div>
          </Flex>
          <Text mt={4} fontWeight="bold">
            Flavor Profile:
          </Text>
          <Text fontWeight="bold">Likes Given:</Text>
          <Drawer users={users}></Drawer>
        </CardBody>
      </Card>

      <Card className={Style.select}>
        <CardHeader pb={2}>
          <Heading size="md">Friends list: </Heading>
        </CardHeader>
        <CardBody display="flex" flexDirection="column" pt={0}>
          Currently no friends...
          <hr />
          <Heading mt={3} size="sm">
            Available Users:
          </Heading>
          <UsersList users={users}></UsersList>
        </CardBody>
      </Card>
    </Flex>
  );
}
