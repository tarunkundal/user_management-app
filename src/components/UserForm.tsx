import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ROUTES from "../routes";
import { useState } from "react";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  bio: "",
};

const UserForm = () => {
  const [value, setValue] = useState(initialValues);
  const toast = useToast();

  const handleOnChange = (e: {
    target: { name: string; value: string | number };
  }) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (value.bio.length > 250) {
      return toast({
        position: "top",
        title: "Bio cannot exceeds more then 200 characters.",
        isClosable: true,
        duration: 3000,
        status: "warning",
      });
    }

    console.log(value);
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          boxShadow={"lg"}
          p={8}
          bg={useColorModeValue("secondary", "teritory")}
        >
          <Stack align={"center"} pb={6}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Create User
            </Heading>
            <Text
              fontSize={"lg"}
              bgGradient="linear(to-r, red.200, pink.300,red.200, orange.300,red.400)"
              bgClip="text"
            >
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Stack spacing={4}>
            <form onSubmit={handleOnSubmit}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      border={"2px"}
                      fontWeight={"medium"}
                      placeholder="Mexx"
                      _placeholder={{
                        color: useColorModeValue("teritory", "primary"),
                        opacity: 0.4,
                      }}
                      id="firstName"
                      name="firstName"
                      value={value.firstName}
                      onChange={handleOnChange}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      border={"2px"}
                      fontWeight={"medium"}
                      placeholder="Well"
                      _placeholder={{
                        color: useColorModeValue("teritory", "primary"),
                        opacity: 0.4,
                      }}
                      id="lastName"
                      name="lastName"
                      value={value.lastName}
                      onChange={handleOnChange}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  border={"2px"}
                  fontWeight={"medium"}
                  placeholder="example@mail.com"
                  _placeholder={{
                    color: useColorModeValue("teritory", "primary"),
                    opacity: 0.4,
                  }}
                  id="email"
                  name="email"
                  value={value.email}
                  onChange={handleOnChange}
                />
              </FormControl>
              <FormControl id="phone" isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="number"
                  border={"2px"}
                  placeholder="0987654321"
                  fontWeight={"medium"}
                  _placeholder={{
                    color: useColorModeValue("teritory", "primary"),
                    opacity: 0.4,
                  }}
                  id="phone"
                  name="phone"
                  value={value.phone}
                  onChange={handleOnChange}
                />
              </FormControl>
              <FormControl id="bio" isRequired>
                <FormLabel>Bio</FormLabel>
                <Textarea
                  border={"2px"}
                  placeholder="Write about yourself not more then 200 characters."
                  _placeholder={{
                    color: useColorModeValue("teritory", "primary"),
                    opacity: 0.4,
                  }}
                  id="bio"
                  name="bio"
                  value={value.bio}
                  onChange={handleOnChange}
                />
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  color={"primary"}
                  bg={"button"}
                  border={"2px"}
                  _hover={{ bg: "teritory" }}
                  type="submit"
                >
                  Add User
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link
                    to={ROUTES.Home}
                    style={{
                      color: "red",
                      marginLeft: "5px",
                    }}
                  >
                    Go Back
                  </Link>
                </Text>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default UserForm;
