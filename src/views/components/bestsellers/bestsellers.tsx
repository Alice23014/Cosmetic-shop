import { bestsellerSlideMock } from "../../../shared/mocks/bestsellerSlideMock";
import { BestsellersSlide } from "../../../shared/UI/bestsellersSlide/bestsellersSlide";
import { ButtonOpacity } from "../../../shared/UI/button-opacity/button-opacity";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import LinkArrow from "../../../assets/images/link-arrow.svg";
import "swiper/css";

import cn from "classnames";

import styles from "./bestsellers.module.scss";

interface SlideButtonProps {
  className: string;
  type:string;
}

const SlideButton: React.FC<SlideButtonProps> = ({ className, type }) => {
  const swiper = useSwiper();

  return (
    <button
      className={styles.bestsellersContainerBtn}
      onClick={() =>
        type === "Prev" ? swiper.slidePrev() : swiper.slideNext()
      }
    >
      <img className={className} src={LinkArrow} alt="Arrow" />
    </button>
  );
};

export const Bestsellers = () => {
  return (
    <section className={styles.bestsellers}>
      <div className={`container ${styles.bestsellersContainer}`}>
        <div className={styles.bestsellersContainerInfo}>
          <h2>Бестселлеры</h2>
          <p>Легендарные продукты, завоевавшие любовь наших клиентов</p>
          <ButtonOpacity text={"Смотреть все"} url="#" />
        </div>
        <Swiper
          wrapperClass={styles.bestsellersSwiper}
          spaceBetween={30}
          slidesPerView={3}
          className={styles.bestsellersContainerList}
        >
          {bestsellerSlideMock.map((item) => (
            <SwiperSlide key={item.id}>
              <BestsellersSlide
                id={item.id}
                image={item.img}
                name={item.name}
                desc={item.desc}
              />
            </SwiperSlide>
          ))}
          <div className={styles.bestsellersContainerWrap}>
            <SlideButton
              className={cn(
                styles.bestsellersContainerBtnArrow,
                styles.bestsellersContainerBtnArrowReverse
              )}
              type="Prev"
            />  
            <SlideButton
              className={styles.bestsellersContainerBtnArrow}
              type="Next"
            />
          </div>
        </Swiper>
      </div>
    </section>
  );
};
