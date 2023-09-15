import { IHero } from "../types/hero";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { FiX } from "react-icons/fi";
type Props = {
  hero: Pick<IHero, "nickname" | "_id" | "images">;
  isFetching: boolean;
};

const HeroCard = ({ hero, isFetching }: Props) => {
  const handleDeleteHero = () => {
    console.log(hero._id);
  };

  return (
    <Card
      className={classNames("card relative", {
        disabled: isFetching,
      })}
      style={{ width: "12rem", height: "20rem" }}
    >
      <span
        className='card__delete'
        onClick={handleDeleteHero}
      >
        <FiX
          width={16}
          height={16}
        />
      </span>
      <NavLink
        to={"/hero/" + hero._id}
        style={{ height: "80%" }}
      >
        <Card.Img
          src={hero.images[0]}
          style={{ height: "100%" }}
        />
      </NavLink>
      <Card.Body style={{ height: "20%" }}>
        <Card.Title>{hero.nickname}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default HeroCard;
