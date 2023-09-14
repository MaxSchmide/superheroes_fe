import { Stack } from "react-bootstrap";
import { useGetAllHeroesQuery } from "../store";
import HeroCard from "../components/HeroCard";

const HomePage = () => {
  const { data, isLoading } = useGetAllHeroesQuery();

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Stack
            direction='horizontal'
            gap={4}
          >
            {data?.map((hero) => (
              <HeroCard hero={hero} />
            ))}
          </Stack>
        </>
      )}
    </>
  );
};

export default HomePage;
