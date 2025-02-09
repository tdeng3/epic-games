import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={"60px"} />
      <ColorModeButton style={{ position: "absolute", right: "0" }} />
    </HStack>
  );
};

export default NavBar;
