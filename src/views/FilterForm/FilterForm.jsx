import styles from "./FilterForm.module.scss";

const FilterForm = () => {
  return (
    <form className={`${styles.form} ${styles.uMarginTopSmall}`}>
      <fieldset className={styles.formField}>
        <label className={styles.formLabel}>
          Type:
          <select className={styles.formInput} defaultValue="all">
            <option value="all">All</option>
            <option value="games">Games</option>
            <option value="dlcs">DLC's</option>
            <option value="items">Items</option>
          </select>
        </label>
      </fieldset>

      <fieldset className={styles.formField}>
        <label className={styles.formLabel}>
          Sort by:
          <select className={styles.formInput} defaultValue="date">
            <option value="date">Release date</option>
            <option value="value">Value</option>
            <option value="popularity">Popularity</option>
          </select>
        </label>
      </fieldset>
    </form>
  );
};

export default FilterForm;
