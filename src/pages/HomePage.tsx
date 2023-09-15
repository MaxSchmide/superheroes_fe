import { Stack, Row, Col } from "react-bootstrap";
import { useGetAllHeroesQuery } from "../store";
import HeroCard from "../components/HeroCard";
import MyPagination from "../components/MyPagination";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const perPage = Number(searchParams.get("perPage")) || 5;
  const { data, isLoading, isFetching } = useGetAllHeroesQuery({
    page,
    perPage,
  });

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data && (
            <>
              <Stack
                direction='horizontal'
                gap={4}
                className='mb-5 wrap justify-content-center'
              >
                {data.data.map((hero) => (
                  <HeroCard
                    hero={hero}
                    key={hero._id}
                    isFetching={isFetching}
                  />
                ))}
              </Stack>
              {data.totalPages > 1 && (
                <Row className='justify-content-center'>
                  <Col md='auto'>
                    <MyPagination
                      totalPages={data.totalPages}
                      currentPage={page}
                      perPage={perPage}
                    />
                  </Col>
                </Row>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default HomePage;
