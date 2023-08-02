import Card from "../../components/Card/Card";
import styles from "./CardList.module.scss";

const CardList = ({ heading }) => {
  return (
    <section className={styles.cardList}>
      <div className={styles.uContainer}>
        <h3
          className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}
        >
          {heading}
        </h3>
        <div className={styles.cardListContainer}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default CardList;
