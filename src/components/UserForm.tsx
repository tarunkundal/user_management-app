import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";

const UserForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          boxShadow={"lg"}
          p={8}
          bg={useColorModeValue("secondary", "teritory")}
        >
          {" "}
          <Stack align={"center"} pb={6}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Create User
            </Heading>
            <Text fontSize={"lg"} color={"red.200"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
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
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  border={"2px"}
                  fontWeight={"medium"}
                  placeholder="xxx008xxx"
                  _placeholder={{
                    color: useColorModeValue("teritory", "primary"),
                    opacity: 0.4,
                  }}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                    p={0}
                  >
                    {showPassword ? <BiShow /> : <BiHide />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                color={"primary"}
                bg={"button"}
                border={"2px"}
              >
                Add User
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link color={"red"}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default UserForm;
