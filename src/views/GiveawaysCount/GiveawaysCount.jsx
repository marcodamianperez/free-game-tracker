import styles from "./GiveawaysCount.module.scss";

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
          <i className="bi bi-controller"></i>
          <span id="qtyGames">179</span> Games
        </p>
        <p className={styles.giveawaysCountText}>
          <i className="bi bi-puzzle"></i>
          <span id="qtyDlc">201</span> DLC's
        </p>
        <p className={styles.giveawaysCountText}>
          <i className="bi bi-gem"></i>
          <span id="qtyBeta">45</span> Beta Games
        </p>
      </div>
    </section>
  );
};

export default GiveawaysCount;
