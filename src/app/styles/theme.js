import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        fontSize: "sm",
        backgroundColor: props.colorMode === "light" ? "#262930" : "gray.600",
        color: props.colorMode === "dark" ? "white" : "white",
      },
      a: {
        color: props.colorMode === "dark" ? "teal.300" : "teal.500",
      },
    }),
  },
});
