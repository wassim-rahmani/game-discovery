import { Platform } from "../hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    apple: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    iphone: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY="10px">
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          color="gray.500"
          as={iconMap[platform.slug]}
        ></Icon>
      ))}
    </HStack>
  );
}

export default PlatformIconList;
