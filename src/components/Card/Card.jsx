import styles from "./Card.module.scss";
import { BsShareFill, BsHeart, BsPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className={styles.card}>
      <Link to="/details/${id}" className={styles.cardImage}>
        <img src="https://placehold.co/300x157" alt="thumbnail" />
      </Link>
      <div className={styles.cardBody}>
        <Link
          to="/details/${id}"
          className={styles.cardTitle}
          title="game title"
        >
          Game title
        </Link>
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
          <Link
            to="/details/${id}"
            className={`${styles.btn} ${styles.btnColor}`}
          >
            View Giveaway
          </Link>
        </div>
        <div className={styles.cardMetric}>
          <BsPeopleFill /> 1754 times claimed
        </div>
      </div>
    </div>
  );
};

export default Card;
