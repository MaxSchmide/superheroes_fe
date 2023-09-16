import { useParams } from "react-router-dom";
import { useGetHeroByIdQuery } from "../store";
import { ErrorHandler } from "../components/ErrorHandler";
import { Loader } from "../components/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import EditModal from "../components/EditModal";
import { useState } from "react";
import { Button } from "react-bootstrap";
import classNames from "classnames";

const HeroPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, isFetching } = useGetHeroByIdQuery(id!);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <ErrorHandler isError={isError}>
      <Loader isLoading={isLoading}>
        {data ? (
          <div
            className={classNames({
              hero__container: isFetching,
            })}
          >
            <header className='hero__header'>
              <h1>{data?.nickname}</h1>
              <Button onClick={handleShowModal}>Edit Hero</Button>
            </header>
            <section className='swiper__container mb-5'>
              <Swiper
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop
                spaceBetween={20}
                navigation={true}
                modules={[Navigation, Autoplay]}
              >
                {data?.images.map((img) => (
                  <SwiperSlide key={img}>
                    <div className='swiper__slide'>
                      <img
                        src={img}
                        alt='Hero picture'
                        style={{
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
            <section>
              <article className='hero__info'>
                <h4>Real name:</h4>
                <p>{data?.real_name}</p>
              </article>
              <article className='hero__info'>
                <h4>"Catch" phrase:</h4>
                <p>
                  <q>{data?.catch_phrase}</q>
                </p>
              </article>
              <article className='hero__powers'>
                <h4>Superpowers:</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {data?.superpowers.map((power) => (
                    <li key={power}>{power}</li>
                  ))}
                </ul>
              </article>
              <article className='hero__info'>
                <h4>Origin:</h4>
                <p>{data?.origin_description}</p>
              </article>
            </section>
            <EditModal
              show={showModal}
              onClose={handleCloseModal}
              hero={data}
            />
          </div>
        ) : (
          <p>No such Hero was found</p>
        )}
      </Loader>
    </ErrorHandler>
  );
};

export default HeroPage;
