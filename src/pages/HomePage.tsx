import { Card } from "react-bootstrap";
import { useGetAllHeroesQuery } from "../store";

const HomePage = () => {
  const { data, isLoading } = useGetAllHeroesQuery();

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data?.map((item) => (
            <Card
              key={item._id}
              style={{ width: "16rem" }}
            >
              <Card.Img src={item.images[0]} />
              <Card.Body>
                <Card.Title>{item.nickname}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </>
      )}
    </>
  );
};

export default HomePage;
