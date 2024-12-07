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
              <p className={styles.careInfoText}>
                Не всегда очевидно, какие элементы и минералы необходимы коже, а
                многочисленные эксперименты с разными средствами только ухудшают
                ее качество.
              </p>
              <p className={styles.careInfoText}  >
                Заполните анкету, и мы подберем уход, подходящий именно вам,
                учитывая ваш образ жизни, место жительства и другие факторы.
              </p>
              <ButtonOpacity text="Заполнить анкету" url="#"></ButtonOpacity>
            </div>
            <div className={styles.careImg}>
              <div className={styles.careImgAbsolute}>
                <img className={styles.careImg} src={CareImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}