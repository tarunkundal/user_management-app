import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Heading,
} from "@chakra-ui/react";
import { BiMoon, BiSun } from "react-icons/bi";
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
          <Heading>Logo</Heading>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button
                onClick={toggleColorMode}
                bg={"button"}
                color={"white"}
                _hover={{ bg: "teritory" }}
              >
                {colorMode === "light" ? <BiMoon /> : <BiSun />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList
                  alignItems={"center"}
                  border={"2px"}
                  w={"250px"}
                  bg={useColorModeValue("primary", "teritory")}
                >
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <Heading fontSize={"1.5rem"}>{"Hey User"}</Heading>
                  </Center>
                  <br />
                  <MenuDivider />
                  <Stack color={useColorModeValue("", "secondary")}>
                    <MenuItem bg={"initial"} _hover={{ bg: "button" }}>
                      <Link to={ROUTES.EditUser}>Edit Profile</Link>
                    </MenuItem>
                    <MenuItem bg={"initial"} _hover={{ bg: "button" }}>
                      Account Settings
                    </MenuItem>
                  </Stack>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
