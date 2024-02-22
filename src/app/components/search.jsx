"use client";
import {
  Input,
  Card,
  CardBody,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Style from "@/app/styles/navBar.module.css";
import UsersList from "@/app/components/userList";

export default function Search() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (searchVal) => {
    if (searchVal === "") {
      setUsers([]);
      return;
    }
    const params = new URLSearchParams();
    params.append("name", searchVal);

    const response = await fetch("api/user?" + params);
    if (!response.ok) return;

    const data = await response.json();
    setUsers(data);
  };

  return (
    <Card className={Style.select}>
      <InputGroup m={5} mb={2} width={265}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" />
        </InputLeftElement>
        <Input
          onChange={(event) => fetchUsers(event.target.value)}
          placeholder="search user..."
        ></Input>
      </InputGroup>
      <CardBody display="flex" flexDirection="column" pt={0}>
        <UsersList users={users}></UsersList>
      </CardBody>
    </Card>
  );
}
