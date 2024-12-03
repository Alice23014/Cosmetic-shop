import styles from "./hero-card.module.scss";
import LinkArrow from "../../../assets/images/link-arrow.svg";

interface HeroCardProps {
    image: string;
    text: string;
}
export const HeroCard: React.FC<HeroCardProps> = ({image, text}) => {
    return (
    <div className={styles.card}>
        <div className={styles.cardImg}>
            <img src={image} alt="" />
        </div>
        <a className={styles.cardLink}>
            <p className={styles.cardLinkText}>{text}</p>
            <img
                className={styles.cardLinkArrow}
                src={LinkArrow}
                alt=""
            />
        </a>
    </div>
    );
}

