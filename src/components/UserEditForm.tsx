import React, { useState } from "react";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Avatar,
  Center,
  useColorModeValue,
  Box,
  CloseButton,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useUserStore } from "../store/UserContextProvider";
import { Redirect } from "react-router-dom";

const UserEditForm = (props: {
  id: string;
  onClose: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  const { users, updateUser } = useUserStore();
  const userToBeUpdated = users.find((user) => user.id === props.id);

  const toast = useToast();

  const initialUserValues: any = userToBeUpdated;
  const [userValues, setUserValues] = useState(initialUserValues);

  const fullName = (
    userToBeUpdated?.firstName +
    " " +
    userToBeUpdated?.lastName
  ).toString();

  const handleOnChange = (e: { target: { name: string; value: any } }) => {
    setUserValues({ ...userValues, [e.target.name]: e.target.value });
  };

  // update user
  const handleUpdateHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    updateUser(props.id, userValues);

    toast({
      isClosable: true,
      status: "success",
      position: "top",
      title: `${fullName} your Profile is updated Sucessfully! `,
      duration: 3000,
    });
  };

  return (
    <Flex align={"center"} justify={"center"} rounded={"xl"}>
      <Stack
        spacing={4}
        w={"full"}
        h={"full"}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        bg={useColorModeValue("secondary", "teritory")}
      >
        <Flex justifyContent={"space-between"}>
          <Box />
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            Edit User Profile
          </Heading>
          <CloseButton
            color={"red"}
            bg={"red.200"}
            _hover={{ bg: "red.300" }}
            onClick={props.onClose}
          />
        </Flex>
        <FormControl id="userName">
          <Stack direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar size="xl" name={fullName} />
            </Center>
            <Center w="full">
              <Heading>{fullName}</Heading>
            </Center>
          </Stack>
        </FormControl>
        <form onSubmit={handleUpdateHandler}>
          <Stack>
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
              <FormControl id="firstName" isRequired>
                <FormLabel>First name</FormLabel>
                <Input
                  placeholder="firstName"
                  border={"2px"}
                  type="text"
                  fontWeight={"medium"}
                  value={userValues?.firstName}
                  id="firstName"
                  name="firstName"
                  _placeholder={{
                    color: useColorModeValue("teritory", "primary"),
                    opacity: 0.4,
                  }}
                  onChange={handleOnChange}
                />
              </FormControl>
              <FormControl id="lastName">
                <FormLabel>Last name</FormLabel>
                <Input
                  placeholder="lastName"
                  border={"2px"}
                  type="text"
                  fontWeight={"medium"}
                  value={userValues?.lastName}
                  id="lastName"
                  name="lastName"
                  _placeholder={{
                    color: useColorModeValue("teritory", "primary"),
                    opacity: 0.4,
                  }}
                  onChange={handleOnChange}
                />
              </FormControl>
            </Stack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                border={"2px"}
                type="email"
                fontWeight={"medium"}
                value={userValues?.email}
                id="email"
                name="email"
                _placeholder={{
                  color: useColorModeValue("teritory", "primary"),
                  opacity: 0.4,
                }}
                onChange={handleOnChange}
              />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="number"
                border={"2px"}
                fontWeight={"medium"}
                value={userValues?.phone}
                id="phone"
                name="phone"
                _placeholder={{
                  color: useColorModeValue("teritory", "primary"),
                  opacity: 0.4,
                }}
                onChange={handleOnChange}
              />
            </FormControl>
            <FormControl id="bio" isRequired>
              <FormLabel>Bio</FormLabel>
              <Textarea
                border={"2px"}
                fontWeight={"medium"}
                value={userValues?.bio}
                id="bio"
                name="bio"
                _placeholder={{
                  color: useColorModeValue("teritory", "primary"),
                  opacity: 0.4,
                }}
                onChange={handleOnChange}
              />
            </FormControl>
            <Stack spacing={6} direction={["column", "row"]}>
              <Button
                bg={"red.400"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "red.500",
                }}
                onClick={props.onClose}
              >
                Cancle
              </Button>
              <Button
                bg={"button"}
                color={"primary"}
                w="full"
                _hover={{
                  bg: "teritory",
                }}
                type="submit"
              >
                Update
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
};

export default UserEditForm;
