import React from "react";
import UserI from "../interface";
import { Center, Grid, Stack, Text } from "@chakra-ui/react";
import UserCard from "../components/UserCard";
import { useUserStore } from "../store/UserContextProvider";

const Home = () => {
  const { users } = useUserStore();
  const dummyData: UserI[] = [
    {
      id: 1,
      firstName: "Andrew",
      lastName: "",
      email: "test3@mail.com",
      phone: "098765432",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      id: 2,
      firstName: "Anjali",
      lastName: "Thakur",
      email: "test4@mail.com",
      phone: "098765432",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      id: 3,
      firstName: "Maxx",
      lastName: "Well",
      email: "test4@mail.com",
      phone: "098765432",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
  ];

  const data = users.length === 0 ? dummyData : users;

  return (
    <Stack gap={4} minH={"100vh"}>
      {users.length === 0 && (
        <>
          <Center>
            <Text
              fontSize={"22px"}
              fontFamily={"heading"}
              bgGradient="linear(to-r, red, pink.700, orange,purple,red)"
              bgClip="text"
              textAlign={"center"}
            >
              Please, Create User to start. Given below are Dummy Users it may
              not work to use functionalities please create users.
            </Text>
          </Center>
        </>
      )}

      <Grid
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3, 1fr)" }}
        gap={6}
        m={{ base: "12" }}
      >
        {data.map((user) => {
          return (
            <UserCard
              key={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.email}
              bio={user.bio}
              phone={user.phone}
              id={user.id}
            />
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Home;
