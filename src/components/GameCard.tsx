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

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card width="300px" height="400px" borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
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
