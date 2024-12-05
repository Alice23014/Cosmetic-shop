import { FC } from "react";
import styles from "./bestsellersSlide.module.scss";
import { Link } from "react-router-dom";
import { ButtonOpacity } from "../button-opacity/button-opacity";


interface BestsellersSlideProps {
  id: number;
  image: string;
  name: string;
  desc: string;
}

export const BestsellersSlide: FC<BestsellersSlideProps> = ({
  image,
  id,
  desc,
  name,
}) => {
  return (
    <div className={styles.bestsellersSlide}>
      <div className={styles.bestsellersSlideImg}>
        <img src={image} />
      </div>
      <div className={styles.bestsellersSlideInfo}>
        <h3>{name}</h3>
        <p className={styles.bestsellersSlideText}>{desc}</p>
        <ButtonOpacity isUnderline text={"Подробнее"} url={String(id)} />
      </div>
    </div>
  );
};
