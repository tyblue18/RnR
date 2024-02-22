import { Avatar, Text, Button } from "@chakra-ui/react";
import { AddIcon } from "./icons";
import Style from "@/app/styles/navBar.module.css";

export default function UsersList({ users }) {
  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.email}>
            <div className={Style.userButton}>
              <Avatar name={user?.name} src={user?.image} size="sm" m={3} />
              <section>
                <Text fontSize="sm" textAlign="left">
                  {user.name}
                </Text>
                <Text fontSize="xs" textAlign="left">
                  {user.email}
                </Text>
              </section>
              {/* <Button>
                <AddIcon />
              </Button> */}
            </div>
          </div>
        );
      })}
    </>
  );
}
