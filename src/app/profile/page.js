import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Avatar, Text, Flex } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  return (
    <Card maxW="sm" borderWidth="1px" borderRadius="sm" overflow="hidden">
      <CardBody>
        <Flex p={4} flexDirection="column" alignItems="flex-start">
          <Avatar
            name={session?.user?.name}
            src={session?.user?.image}
            size="lg"
          />
          <Text mt={2} fontWeight="bold">
            Name: {session?.user?.name}
          </Text>
          <Text>Email: {session?.user?.email}</Text>
        </Flex>
      </CardBody>
    </Card>
  );
}
