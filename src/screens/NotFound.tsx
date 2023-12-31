import { Box, Heading, Text, Button, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ROUTES from "../routes";

const NotFound = () => {
  return (
    <Center>
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="3xl"
          bgGradient="linear(to-r, red.400, orange.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="22px" fontWeight={"bold"} mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={"red.400"} mb={6}>
          The page you're looking for does not seem to exist
        </Text>
        <Link to={ROUTES.Home}>
          <Button
            colorScheme="purple"
            bgGradient="linear(to-r, red.400, pink.300,red.500, orange.400,red.600)"
            color="white"
            variant="solid"
          >
            Go to Home
          </Button>
        </Link>
      </Box>
    </Center>
  );
};

export default NotFound;
