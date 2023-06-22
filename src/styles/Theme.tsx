import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      900: "#FFF0F0",
      100: "#EBD4D4",
    },
    primary: "#FFF0F0",
    secondary: "#EBD4D4",
    button: "#835858",
    teritory: "#463333",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === "light" ? "#FFF0F0" : "#EBD4D4",
        color: props.colorMode === "light" ? "#835858" : "#FFF0F0",
      },
      a: {
        color: props.colorMode === "dark" ? "#FFF0F0" : "white",
      },
    }),
  },
});

export default theme;
