import { IHero } from "../types/hero";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

type Props = {
  hero: Pick<IHero, "nickname" | "_id" | "images">;
};

const HeroCard = ({ hero }: Props) => {
  return (
    <Card
      className='card'
      key={hero._id}
      style={{ width: "16rem" }}
    >
      <NavLink to={`/hero/${hero._id}`}>
        <Card.Img src={hero.images[0]} />
      </NavLink>
      <Card.Body>
        <Card.Title>{hero.nickname}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default HeroCard;
