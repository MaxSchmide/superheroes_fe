import { Col, Row, Stack } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import HeroCard from "../components/HeroCard";
import MyPagination from "../components/MyPagination";
import { useGetAllHeroesQuery } from "../store";
import { ErrorHandler } from "../components/ErrorHandler";
import { Loader } from "../components/Loader";
import { useEffect, useCallback } from "react";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const perPage = 5;
  const { data, isLoading, isFetching, isError } = useGetAllHeroesQuery({
    page,
    perPage,
  });

  const changePage = useCallback(() => {
    const params = new URLSearchParams(searchParams);

    params.set("page", String(page - 1));

    setSearchParams(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (data && data?.totalHeroes > 0 && !data.heroes.length) {
      changePage();
    }
  }, [data, changePage]);

  return (
    <ErrorHandler isError={isError}>
      <Loader isLoading={isLoading}>
        {data && data.heroes.length ? (
          <>
            <Stack
              direction='horizontal'
              gap={4}
              className='mb-5 wrap justify-content-center'
            >
              {data.heroes.map((hero) => (
                <HeroCard
                  hero={hero}
                  key={hero._id}
                  isFetching={isFetching}
                />
              ))}
            </Stack>
            {data.totalHeroes > perPage && (
              <Row className='justify-content-center'>
                <Col xs='auto'>
                  <MyPagination
                    total={data.totalHeroes}
                    currentPage={page}
                    perPage={perPage}
                  />
                </Col>
              </Row>
            )}
          </>
        ) : (
          <p>No data recived</p>
        )}
      </Loader>
    </ErrorHandler>
  );
};

export default HomePage;
