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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ROUTES from "../routes";
import { useState } from "react";
import { useUserStore } from "../store/UserContextProvider";
import UserI from "../interface";
import Modall from "../screens/Modal";

const initialValues: UserI = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  bio: "",
  id: "",
};

const UserForm = () => {
  const { addUser } = useUserStore();
  const [value, setValue] = useState(initialValues);
  const toast = useToast();
  const [alertIsOpen, setAlertIsOpen] = useState(false);

  const handleOnChange = (e: {
    target: { name: string; value: string | number };
  }) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
      id: Math.random().toString() + 1.0345,
    });
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

    addUser(value);
    setValue(initialValues);
    setAlertIsOpen(true);
  };

  return (
    <>
      {alertIsOpen && (
        <Modall>
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="250px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Sucessfully Created!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Thanks for registering your application. Our team will get back to
              you soon.
            </AlertDescription>
            <Link to={ROUTES.Home}>
              <Button
                mt={6}
                colorScheme="green"
                onClick={() => setAlertIsOpen(false)}
              >
                Okay
              </Button>
            </Link>
          </Alert>
        </Modall>
      )}
      <Flex align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Box
            rounded={"lg"}
            boxShadow={"lg"}
            p={8}
            bg={useColorModeValue("secondary", "teritory")}
          >
            <Stack align={"center"} pb={6}>
              <Heading
                fontSize={"4xl"}
                bgGradient="linear(to-r, red.200, pink.300,red.200, orange.300,red.400)"
                bgClip="text"
                textAlign={"center"}
              >
                Create User
              </Heading>
            </Stack>
            <form onSubmit={handleOnSubmit}>
              <Stack spacing={4}>
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
                    type="submit"
                    bgGradient="linear(to-r, red.200, pink.300,red.200, orange.300,red.400)"
                    _hover={{
                      bgGradient:
                        "linear(to-l, red.200, pink.300,red.200, orange.300,red.400)",
                    }}
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
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default UserForm;
