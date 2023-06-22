import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Image,
} from "@chakra-ui/react";
import { BiHome, BiMoon, BiSun, BiUser } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import ROUTES from "../routes";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        bg={useColorModeValue("secondary", "teritory")}
        px={4}
        borderBottom={"2px"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <FaUsers size={40} />

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Link to={ROUTES.Home}>
                <Button
                  bg={useColorModeValue("button", "teritory")}
                  color={"primary"}
                  _hover={{ bg: "teritory" }}
                >
                  <BiHome />
                </Button>
              </Link>
              <Link to={ROUTES.CreateUser}>
                <Button
                  bg={useColorModeValue("button", "teritory")}
                  color={"primary"}
                  _hover={{ bg: "teritory" }}
                >
                  <BiUser />
                  <Text ml={2}>Create User</Text>
                </Button>
              </Link>
              <Button
                onClick={toggleColorMode}
                bg={"button"}
                color={"white"}
                _hover={{ bg: "teritory" }}
              >
                {colorMode === "light" ? <BiMoon /> : <BiSun />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
