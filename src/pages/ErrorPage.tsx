import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "Invalid page"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
