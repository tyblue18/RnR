import { Avatar, Text, IconButton } from "@chakra-ui/react";
import { AddIcon } from "./icons";
import Style from "@/app/styles/navBar.module.css";
// import { getServerSession } from "next-auth";
// import { auth } from "@/libs/auth";

export default async function UsersList({ users }) {
  // const session = getServerSession().then((res) => {
  //   console.log(res);
  // });
  // console.log(session);

  function sendFriendRequest(friendId) {
    // await addFriend()
  }

  // const users = await fetch("http://localhost:3000/api/user")
  // .then((res) => res.json())
  // .then((res) => {
  //   return res.filter((user) => user.email != session.user.email);
  // });

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
              <section style={{ flex: 1, marginRight: "10px" }}>
                <IconButton
                  onClick={sendFriendRequest(user._id)}
                  icon={<AddIcon />}
                  isRound={true}
                  colorScheme="green"
                  size="xs"
                  float="right"
                  aria-label="idk"
                ></IconButton>
              </section>
            </div>
          </div>
        );
      })}
    </>
  );
}
