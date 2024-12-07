import styles from "./subscribe.module.scss"

import { ButtonOpacity } from "../../../shared/UI/button-opacity/button-opacity";
import { subscribeMock } from "../../../shared/mocks/subscribeSectionMock";

export const Subscribe =() =>{
    return (
      <section className={styles.subscribe}>
        <div className={`container ${styles.subscribeContainer}`}>
          <ul className={styles.subscribeList}>
            {subscribeMock.map((item)=>(
            <li key={item.id} className={styles.subscribeItem}>
              <img
                className={styles.subscribeItemImg}
                src={item.img}
                alt=""
              />
            </li>
            ))}
          </ul>
          <div className={styles.subscribeInfo}>
            <h2 className={styles.subscribeInfoTitle}>Присоединяйтесь к нам</h2>
            <p className={styles.subscribeInfoText}>
              Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и
              акциях первыми
            </p>
            <ButtonOpacity text={"Подписаться"} url="#"></ButtonOpacity>
          </div>
        </div>
      </section>
    );
}