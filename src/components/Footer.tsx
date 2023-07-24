import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import { FaGoogle, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <Stack
      w={"100vw"}
      bg={useColorModeValue("secondary", "teritory")}
      px={"10%"}
      bottom={0}
    >
      <Stack
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={{ base: "column", md: "row" }}
        p={2}
      >
        <Box />
        <Flex px={5} py={2}>
          <Text>© Copyright 2023:</Text>
          <Text fontWeight={"bold"} ml={"5px"}>
            Tarun Chauhan
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"} w={{ base: "35%", md: "15%" }}>
          <a href="https://www.goole.com">
            <FaGoogle cursor={"pointer"} size={"1.3rem"} color="red" />
          </a>
          <a href="https://www.telegram.com">
            <FaTelegram cursor={"pointer"} size={"1.3rem"} color="skyblue" />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram cursor={"pointer"} size={"1.3rem"} color="red" />
          </a>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Footer;
