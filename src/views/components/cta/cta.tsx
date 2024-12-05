import CtaBg from "../../../assets/images/cta-bg.png";
import { ButtonOpacity } from "../../../shared/UI/button-opacity/button-opacity";
import styles from "./cta.module.scss";
export const Cta =()=>{
    return (
      <section className={styles.cta}>
        <div className={styles.ctaImg}>
          <img src={CtaBg} alt="" />
        </div>
        <div className={`container ${styles.ctaContainer}`}>
          <div className={styles.ctaWrap}>
            <h2 className={styles.ctaTitle}>Встречайте весну вместе с нами</h2>
            <p className={styles.ctaText}>
              Попробуйте новую коллекцию ухаживающих средств для лица с SPF
              защитой
            </p>
            <ButtonOpacity text="Подробнее" url="#"></ButtonOpacity>
          </div>
        </div>
      </section>
    );
}