import React from "react";

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
} from "@chakra-ui/react";

const UserEditForm = () => {
  return (
    <Flex align={"center"} justify={"center"}>
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
        bg={useColorModeValue("secondary", "teritory")}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          User Profile Edit
        </Heading>
        <FormControl id="userName">
          <FormLabel>User Icon</FormLabel>
          <Stack direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar size="xl" name="Tarun Chauhan" />
            </Center>
            <Center w="full">
              <Button
                w="full"
                border={"2px"}
                bg={"button"}
                color={"primary"}
                _hover={{ bg: "teritory" }}
              >
                Change Icon
              </Button>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="userName" isRequired>
          <FormLabel>User name</FormLabel>
          <Input
            placeholder="UserName"
            border={"2px"}
            type="text"
            fontWeight={"medium"}
            _placeholder={{
              color: useColorModeValue("teritory", "primary"),
              opacity: 0.4,
            }}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            border={"2px"}
            type="email"
            fontWeight={"medium"}
            _placeholder={{
              color: useColorModeValue("teritory", "primary"),
              opacity: 0.4,
            }}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="password"
            type="password"
            border={"2px"}
            fontWeight={"medium"}
            _placeholder={{
              color: useColorModeValue("teritory", "primary"),
              opacity: 0.4,
            }}
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
          >
            Cancel
          </Button>
          <Button
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default UserEditForm;
