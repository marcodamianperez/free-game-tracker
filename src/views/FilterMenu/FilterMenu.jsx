import styles from "./FilterMenu.module.scss";

const FilterMenu = () => {
  return (
    <ul className={styles.filterMenu}>
      <li>
        <button data-id="all" className={`${styles.menuBtn} ${styles.filter}`}>
          Show All
        </button>
      </li>
      <li>
        <button data-id="pc" className={`${styles.menuBtn} ${styles.filter}`}>
          PC
        </button>
      </li>
      <li>
        <button
          data-id="steam"
          className={`${styles.menuBtn} ${styles.filter}`}
        >
          Steam
        </button>
      </li>
      <li>
        <button
          data-id="epic-games-store"
          className={`${styles.menuBtn} ${styles.filter}`}
        >
          Epic Games Store
        </button>
      </li>
      <li>
        <button data-id="gog" className={`${styles.menuBtn} ${styles.filter}`}>
          GOG
        </button>
      </li>
      <li>
        <button
          data-id="origin"
          className={`${styles.menuBtn} ${styles.filter}`}
        >
          Origin
        </button>
      </li>
      <li>
        <button
          data-id="ubisoft"
          className={`${styles.menuBtn} ${styles.filter}`}
        >
          Ubisoft
        </button>
      </li>
      <li>
        <button
          data-id="xbox-one"
          className={`${styles.menuBtn} ${styles.filter}`}
        >
          Xbox One
        </button>
      </li>
      <li>
        <button data-id="ps4" className={`${styles.menuBtn} ${styles.filter}`}>
          PS4
        </button>
      </li>
      <li>
        <button data-id="ps5" className={`${styles.menuBtn} ${styles.filter}`}>
          PS5
        </button>
      </li>
      <li>
        <button
          data-id="switch"
          className={`${styles.menuBtn} ${styles.filter}`}
        >
          Nintendo
        </button>
      </li>
      <li>
        <button
          data-id="android"
          className={`${styles.menuBtn} ${styles.filter}`}
        >
          Android
        </button>
      </li>
      <li>
        <button data-id="ios" className={`${styles.menuBtn} ${styles.filter}`}>
          IOS
        </button>
      </li>
      <li>
        <button
          data-id="drm-free"
          className={`${styles.menuBtn} ${styles.filter}`}
        >
          DRM-Free
        </button>
      </li>
      <li>
        <button
          data-id="itchio"
          className={`${styles.menuBtn} ${styles.filter}`}
        >
          itch.io
        </button>
      </li>
    </ul>
  );
};

export default FilterMenu;
