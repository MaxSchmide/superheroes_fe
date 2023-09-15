import { useParams } from "react-router-dom";
import { useGetHeroByIdQuery } from "../store";
import { ErrorHandler } from "../components/ErrorHandler";
import { Loader } from "../components/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HeroPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetHeroByIdQuery(id!);

  console.log(data);

  return (
    <ErrorHandler isError={isError}>
      <Loader isLoading={isLoading}>
        <header className='mb-5 text-center'>
          <h1>{data?.nickname}</h1>
        </header>
        <section className='swiper__container mb-5'>
          <Swiper
            autoplay
            loop
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
          >
            {data?.images.map((img) => (
              <SwiperSlide>
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
                <li>{power}</li>
              ))}
            </ul>
          </article>
          <article className='hero__info'>
            <h4>Origin:</h4>
            <p>{data?.origin_description}</p>
          </article>
        </section>
      </Loader>
    </ErrorHandler>
  );
};

export default HeroPage;
