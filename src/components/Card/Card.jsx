import styles from "./Card.module.scss";
import { BsShareFill, BsHeart, BsPeopleFill } from "react-icons/bs";

const Card = () => {
  return (
    <div className={styles.card}>
      <a href="./pages/details.html" className={styles.cardImage}>
        <img
          src="https://placehold.co/300x157"
          alt="thumbnail"
          data-id="${giveaway.id}"
        />
      </a>
      <div className={styles.cardBody}>
        <a
          href="./pages/details.html"
          className={styles.cardTitle}
          title="game title"
          data-id="${giveaway.id}"
        >
          Game title
        </a>
        <div className={styles.cardInfo}>
          <div className={styles.cardPrice}>
            <span className={`${styles.badge} ${styles.badgeOutline}`}>
              Free
            </span>
            <span className={styles.cardPricePrevious}>$9.99</span>
          </div>
          <span className={`${styles.badge} ${styles.badgeSolid}`}>Game</span>
        </div>
        <div className={styles.cardPlatforms}>
          Available on: <span id="platforms">PC, Steam</span>
        </div>
        <div className={styles.cardSocial}>
          <BsShareFill />
          <BsHeart />
          <a
            href="/pages/details.html"
            className={`${styles.btn} ${styles.btnColor}`}
            data-id="${
            giveaway.id
          }"
          >
            View Giveaway
          </a>
        </div>
        <div className={styles.cardMetric}>
          <BsPeopleFill /> 1754 times claimed
        </div>
      </div>
    </div>
  );
};

export default Card;
