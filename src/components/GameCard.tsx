import { Game } from "../hooks/useGames";
import { Card, CardBody, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody></CardBody>
    </Card>
  );
};

export default GameCard;
