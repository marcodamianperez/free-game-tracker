import styles from "./Card.module.scss";
import { BsShareFill, BsHeart, BsPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = ({ id, thumbnail, title, worth, type, platforms, users }) => {
  return (
    <div className={styles.card}>
      <Link to="/details/${id}" className={styles.cardImage}>
        <img src={thumbnail} alt={`${title} thumbnail`} />
      </Link>
      <div className={styles.cardBody}>
        <Link to="/details/${id}" className={styles.cardTitle} title={title}>
          {title}
        </Link>
        <div className={styles.cardInfo}>
          <div className={styles.cardPrice}>
            <span className={`${styles.badge} ${styles.badgeOutline}`}>
              Free
            </span>
            <span className={styles.cardPricePrevious}>
              {worth === "N/A" ? "" : worth}
            </span>
          </div>
          <span className={`${styles.badge} ${styles.badgeSolid}`}>{type}</span>
        </div>
        <div className={styles.cardPlatforms}>
          Available on: <span id="platforms">{platforms}</span>
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
          <BsPeopleFill /> {users} times claimed
        </div>
      </div>
    </div>
  );
};

export default Card;
