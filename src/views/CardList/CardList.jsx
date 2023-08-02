import Card from "../../components/Card/Card";
import styles from "./CardList.module.scss";

const CardList = () => {
  return (
    <section className={styles.cardList}>
      <div className={styles.uContainer}>
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
