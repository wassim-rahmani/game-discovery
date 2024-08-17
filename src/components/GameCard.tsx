import {
  Badge,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScoreBadge from "./CriticScoreBadge";
import GameCardContainer from "./GameCardContainer";
import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card height="100%">
      <Image
        objectFit="cover"
        minHeight="50%"
        maxHeight="50%"
        src={game.background_image ? game.background_image : noImage}
      ></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justify="space-between">
          <PlatformIconList
            platforms={game.platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScoreBadge score={game.metacritic}></CriticScoreBadge>
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
