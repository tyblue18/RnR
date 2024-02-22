import { Avatar, Text } from "@chakra-ui/react";
import Style from "@/app/styles/navBar.module.css";

export default function UsersList({ users }) {
  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.email}>
            <button className={Style.userButton}>
              <Avatar name={user?.name} src={user?.image} size="sm" m={3} />
              <section>
                <Text fontSize="sm" textAlign="left">
                  {user.name}
                </Text>
                <Text fontSize="xs" textAlign="left">
                  {user.email}
                </Text>
              </section>
            </button>
          </div>
        );
      })}
    </>
  );
}
