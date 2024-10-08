import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode == "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text whiteSpace="nowrap">Dark mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
