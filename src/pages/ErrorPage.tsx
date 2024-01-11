import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { NavBar } from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>哦天呐!!!!</Heading>
        <Text>
          {isRouteErrorResponse(error) ? "这个页面不存在" : "未知的错误发生了"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
