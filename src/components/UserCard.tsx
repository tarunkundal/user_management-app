import {
  Avatar,
  Button,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMail, FiPhone } from "react-icons/fi";
import { SiAboutdotme } from "react-icons/si";
import React, { useState } from "react";
import UserI from "../interface";
import { useUserStore } from "../store/UserContextProvider";
import UserEditForm from "./UserEditForm";
import Modall from "../screens/Modal";

const UserCard = ({ firstName, lastName, bio, phone, email, id }: UserI) => {
  const { removeUser } = useUserStore();
  const [isUpdate, setIsUpdate] = useState(false);
  const [idOfUserToBeUpdated, setIdOfUserToBeUpdated] = useState("");

  const fullName = (firstName + " " + lastName).toString();

  const handleDeleteUser = (userId: string | number) => {
    removeUser(userId);
  };

  const handleUpdateUser = (userId: any) => {
    setIsUpdate(true);
    setIdOfUserToBeUpdated(userId);
  };

  const closeUpdateHandler = () => {
    setIsUpdate(false);
  };

  return (
    <>
      {isUpdate && (
        <Modall onClose={closeUpdateHandler}>
          <UserEditForm onClose={closeUpdateHandler} id={idOfUserToBeUpdated} />
        </Modall>
      )}

      <Stack
        boxShadow={"dark-lg"}
        w={{ base: "90%", md: "" }}
        m={4}
        py={4}
        mx={{ base: "auto", md: 4 }}
        borderRadius={"20px"}
        spacing={4}
        bg={useColorModeValue("secondary", "teritory")}
        justifyContent={"space-between"}
      >
        <Stack>
          <WrapItem justifyContent={"center"}>
            <Avatar name={fullName} size={"2xl"} />
          </WrapItem>
        </Stack>
        <Stack>
          <Center>
            <Heading
              bgGradient="linear(to-r, red.200, pink.300,red.200, orange.300,red.400)"
              bgClip="text"
              ml={1}
            >
              {fullName}
            </Heading>
          </Center>
          <Stack spacing={2}>
            <Flex mx={4} alignItems={"center"}>
              <FiMail size={22} />
              <Text ml={4} fontWeight={"semibold"}>
                {email}
              </Text>
            </Flex>
            <Flex ml={4} alignItems={"center"}>
              <FiPhone size={22} />

              <Text mx={4} fontWeight={"semibold"}>
                {phone}
              </Text>
            </Flex>
            <Flex mx={4} alignItems={"center"}>
              <SiAboutdotme size={22} />
              <Text ml={4}>{bio}</Text>
            </Flex>
          </Stack>
        </Stack>
        <Stack mx={2} flexDirection={{ base: "column", md: "row" }}>
          <Button
            w={{ md: "50%" }}
            bg={"button"}
            _hover={{ bg: "teritory" }}
            onClick={() => handleUpdateUser(id)}
            color={"secondary"}
          >
            Edit
          </Button>
          <Button
            w={{ md: "50%" }}
            bg={"red.400"}
            color={useColorModeValue("primary", "secondary")}
            _hover={{ bg: "red.500" }}
            onClick={() => handleDeleteUser(id)}
          >
            Delete
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default UserCard;
