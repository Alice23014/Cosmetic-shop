import { ButtonOpacity } from "../../../shared/UI/button-opacity/button-opacity";
import styles from "./quote.module.scss"
import QuoteBg from "../../../assets/images/second-cta-bg.jpg";


export const Quote = () => {
    return (
      <section className={styles.quote}>
        <div className={`container ${styles.quoteContainer}`}>
          <p className={styles.quoteText}>
            “Мы стремимся сделать уход за кожей доступным и приятным ритуалом
            для всех, кто хочет заботиться о себе и своем теле”
          </p>
          <ButtonOpacity text={"Наша история"} url="#"></ButtonOpacity>
        </div>
        <div className={styles.quoteImg}>
          <img src={QuoteBg} alt="" />
        </div>
      </section>
    );
}