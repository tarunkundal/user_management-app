import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import { FaGoogle, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <Stack
      bottom={0}
      w={"100vw"}
      bg={useColorModeValue("secondary", "teritory")}
      px={"10%"}
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
        <Flex justifyContent={"space-between"} w={"50px"}>
          <a href="https://www.goole.com">
            <FaGoogle cursor={"pointer"} />
          </a>
          <a href="https://www.telegram.com">
            <FaTelegram cursor={"pointer"} />
          </a>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Footer;
