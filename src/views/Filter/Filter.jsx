import FilterForm from "../FilterForm/FilterForm";
import FilterMenu from "../FilterMenu/FilterMenu";
import styles from "./Filter.module.scss";

const Filter = ({ handleButtonClick }) => {
  return (
    <section className={styles.filter}>
      <div className={styles.uContainer}>
        <FilterMenu handleButtonClick={handleButtonClick} />
        <FilterForm />
        <hr className={`${styles.uBreak} ${styles.uMarginTopSmall}`} />
      </div>
    </section>
  );
};

export default Filter;
