import React from "react";
import UserI from "../interface";
import { Grid, Stack } from "@chakra-ui/react";
import UserCard from "../components/UserCard";
import { useUserStore } from "../store/UserContextProvider";

const Home = () => {
  const { users } = useUserStore();
  const data: UserI[] = [
    {
      id: 1,
      firstName: "Tarun",
      lastName: "Chauhan",
      email: "vbnm@mail.com",
      phone: "098765432",
      bio: "we will also add a button to print the values, we can use this button to submit values to our backend.",
    },
    {
      id: 2,
      firstName: "Tarun",
      lastName: "Chauhan",
      email: "vbnm@mail.com",
      phone: "098765432",
      bio: "we will also add a button to print the values, we can use this button to submit values to our backend.",
    },
    {
      id: 3,
      firstName: "Tarun",
      lastName: "Chauhan",
      email: "vbnm@mail.com",
      phone: "098765432",
      bio: "we will also add a button to print the values, we can use this button to submit values to our backend.",
    },
    {
      id: 4,
      firstName: "Tarun",
      lastName: "Chauhan",
      email: "vbnm@mail.com",
      phone: "098765432",
      bio: "we will also add a button to print the values, we can use this button to submit values to our backend.",
    },
    {
      id: 5,
      firstName: "run",
      lastName: "Chauhan",
      email: "vbnm@mail.com",
      phone: "098765432",
      bio: "we will also add a button to print the values, we can use this button to submit values to our backend.",
    },
    {
      id: 6,
      firstName: "Tarun",
      lastName: "Chauhan",
      email: "vbnm@mail.com",
      phone: "098765432",
      bio: "we will also add a button to print the values, we can use this button to submit values to our backend.",
    },
  ];

  return (
    <Stack gap={6}>
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3, 1fr)" }}
        gap={6}
        m={{ base: "12" }}
      >
        {users.map((user) => {
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
