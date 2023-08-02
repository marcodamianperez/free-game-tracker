import styles from "./GiveawayDetails.module.scss";
import {
  BsCaretLeftFill,
  BsShareFill,
  BsHeart,
  BsClock,
  BsPeopleFill,
  BsBoxArrowUpRight,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const GiveawayDetails = () => {
  return (
    <section className={styles.details}>
      <div className={styles.uContainer}>
        <Link
          to="/"
          className={`${styles.btn} ${styles.btnWhite} ${styles.btnIcon} ${styles.uMarginBottomSmall}`}
        >
          <BsCaretLeftFill />
          Home
        </Link>
        <div className={styles.giveaway}>
          <div className={styles.giveawayImage}>
            <img src="https://placehold.co/300x157" alt="giveaway image" />
          </div>
          <div className={styles.giveawayTitle}>Giveaway title</div>
          <div className={styles.giveawayInfo}>
            <div className={styles.giveawayInfoPlatform}>
              <span>Game</span>
              <span>|</span>
              <span className={`${styles.badge} ${styles.badgeSolid}`}>PC</span>
              <span className={`${styles.badge} ${styles.badgeSolid}`}>
                Steam
              </span>
            </div>
            <div className={styles.giveawayInfoPrice}>
              <span className={`${styles.badge} ${styles.badgeOutline}`}>
                Free
              </span>
              <span className={styles.giveawayInfoPricePrevious}>$9.99</span>
            </div>
            <div className={styles.giveawayInfoSocial}>
              <BsShareFill />
              <BsHeart />
            </div>
          </div>
          <hr className={styles.uBreak} />
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea minima,
            sunt distinctio cupiditate impedit, possimus deserunt fugit
            reprehenderit unde quia aspernatur libero nemo sit provident quod
            velit, itaque blanditiis deleniti?
          </p>
          <div className={styles.giveawayInstructions}>
            <div className={styles.giveawayInstructionsTitle}>Instructions</div>
            <p className={styles.paragraph}>
              1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, maxime.
            </p>
            <p className={styles.paragraph}>
              2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, maxime.
            </p>
            <p className={styles.paragraph}>
              3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, maxime.
            </p>
          </div>
          <div className={styles.giveawayCta}>
            <span className={styles.giveawayCtaTimeLeft}>
              <BsClock />
              <span>2 days left</span>
            </span>
            <span className={styles.giveawayCtaTimesClaimed}>
              <BsPeopleFill />
              <span>24897 times claimed</span>
            </span>
            <a
              href="http://www.google.com"
              target="_blank"
              className={`${styles.btn} ${styles.btnColor} ${styles.giveawayCtaBtn} ${styles.btnIcon}`}
            >
              Get Giveaway <BsBoxArrowUpRight />
            </a>
          </div>
        </div>
        <hr className={`${styles.uBreak} ${styles.uMarginTopSmall}`} />
      </div>
    </section>
  );
};

export default GiveawayDetails;
