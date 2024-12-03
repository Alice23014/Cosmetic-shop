import { bestsellerSlideMock } from "../../../shared/mocks/bestsellerSlideMock";
import { BestsellersSlide } from "../../../shared/UI/bestsellersSlide/bestsellersSlide";
import { ButtonOpacity } from "../../../shared/UI/button-opacity/button-opacity";
import styles from "./bestsellers.module.scss";

export const Bestsellers = () => {
  return (
    <section className={styles.bestsellers}>
      <div className={`container ${styles.bestsellersContainer}`}>
        <div className={styles.bestsellersContainerInfo}>
          <h2>Бестселлеры</h2>
          <p>Легендарные продукты, завоевавшие любовь наших клиентов</p>
          <ButtonOpacity text={"Смотреть все"} url='#'/>
        </div>
        <ul className={styles.bestsellersContainerList}>
          {bestsellerSlideMock.map((item) => (
            <BestsellersSlide
              key={item.id}
              id={item.id}
              image={item.img}
              name={item.name}
              desc={item.desc}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
