import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Avatar, Text, Flex } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
} from "@chakra-ui/react";
import UsersList from "@/app/components/userList";
import Style from "@/app/styles/navBar.module.css";
import { capitalizeFirstLetter } from "@/libs/util";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  const users = await fetch("http://localhost:3000/api/user")
    .then((res) => res.json())
    .then((res) => {
      return res.filter((user) => user.email != session.user.email);
    });

  return (
    <Flex>
      <Card
        maxW="sm"
        borderWidth="1px"
        borderRadius="sm"
        overflow="hidden"
        mr={10}
      >
        <CardBody>
          <Flex p={4} flexDirection="column" alignItems="flex-start">
            <Avatar
              name={capitalizeFirstLetter(session?.user?.name)}
              src={session?.user?.image}
              size="lg"
            />
            <Text mt={2} fontWeight="bold">
              Name: {capitalizeFirstLetter(session?.user?.name)}
            </Text>
            <Text>Email: {capitalizeFirstLetter(session?.user?.email)}</Text>
          </Flex>
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
