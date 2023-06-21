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
import { Link } from "react-router-dom";
import ROUTES from "../routes";

const UserCard = () => {
  return (
    <Stack
      boxShadow={"dark-lg"}
      w={{ base: "70%", md: "25%" }}
      m={4}
      mx={"auto"}
      py={4}
      borderRadius={"20px"}
      spacing={4}
      bg={useColorModeValue("primary", "secondary")}
    >
      <Stack>
        <WrapItem justifyContent={"center"}>
          <Avatar name="Tarun Chauhan" size={"2xl"} />
        </WrapItem>
      </Stack>
      <Stack>
        <Center>
          <Heading>{"Tarun Chauhan"}</Heading>
        </Center>
        <Stack spacing={2}>
          <Flex ml={4} alignItems={"center"}>
            <FiMail size={22} />
            <Text ml={4} fontWeight={"semibold"}>
              {"chauhan@mail.com"}
            </Text>
          </Flex>
          <Flex ml={4} alignItems={"center"}>
            <FiPhone size={22} />

            <Text ml={4} fontWeight={"semibold"}>
              {"09876543321"}
            </Text>
          </Flex>
          <Flex ml={4} alignItems={"center"}>
            <FiPhone size={22} />

            <Text ml={4} fontWeight={"semibold"}>
              {"chauhan@mail.com"}
            </Text>
          </Flex>
        </Stack>
      </Stack>
      <Stack mx={2} flexDirection={{ base: "column", md: "row" }}>
        <Button
          w={{ md: "50%" }}
          bg={"button"}
          color={useColorModeValue("primary", "secondary")}
          _hover={{ bg: "teritory" }}
        >
          <Link to={ROUTES.EditUser}>Edit</Link>
        </Button>
        <Button
          w={{ md: "50%" }}
          bg={"red.300"}
          color={useColorModeValue("primary", "secondary")}
          _hover={{ bg: "red.400" }}
        >
          Delete
        </Button>
      </Stack>
    </Stack>
  );
};

export default UserCard;
