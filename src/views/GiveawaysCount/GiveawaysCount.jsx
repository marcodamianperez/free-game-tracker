import styles from "./GiveawaysCount.module.scss";
import { BsController, BsPuzzle, BsGem } from "react-icons/bs";

const GiveawaysCount = () => {
  return (
    <section className={styles.giveawaysCount}>
      <div className={styles.uContainer}>
        <h2
          className={`${styles.headingSecondary} ${styles.uMarginBottomSmall}`}
        >
          Currently serving...
        </h2>

        <p className={styles.giveawaysCountText}>
          <BsController />
          <span id="qtyGames">179</span>&nbsp;Games
        </p>
        <p className={styles.giveawaysCountText}>
          <BsPuzzle />
          <span id="qtyDlc">201</span>&nbsp;DLC's
        </p>
        <p className={styles.giveawaysCountText}>
          <BsGem />
          <span id="qtyBeta">45</span>&nbsp;Beta Games
        </p>
      </div>
    </section>
  );
};

export default GiveawaysCount;
