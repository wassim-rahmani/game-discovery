import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";

function navbar() {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text>Nav bar</Text>
    </HStack>
  );
}

export default navbar;
