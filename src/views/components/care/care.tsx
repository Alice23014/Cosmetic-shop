import { ButtonOpacity } from '../../../shared/UI/button-opacity/button-opacity';
import CareImg from "../../../assets/images/care-img.png";
import styles from './care.module.scss'

export const Care = () =>{
    return (
      <section className={styles.care}>
        <div className={`container ${styles.careContainer}`}>
          <div className={styles.careWrap}>
            <div className={styles.careInfo}>
              <h2>Индивидуальный уход</h2>
              <p>
                Не всегда очевидно, какие элементы и минералы необходимы коже, а
                многочисленные эксперименты с разными средствами только ухудшают
                ее качество.
              </p>
              <p>
                Заполните анкету, и мы подберем уход, подходящий именно вам,
                учитывая ваш образ жизни, место жительства и другие факторы.
              </p>
              <ButtonOpacity text="Заполнить анкету" url="#"></ButtonOpacity>
            </div>
            <div className={styles.careImg}>
              <img src={CareImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
}