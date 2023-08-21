import styles from "./FilterMenu.module.scss";

const FilterMenu = ({ handleButtonClick }) => {
  return (
    <ul className={styles.filterMenu}>
      <li>
        <button
          className={`${styles.menuBtn} ${styles.filter}`}
          onClick={() => handleButtonClick("all")}
        >
          Show All
        </button>
      </li>
      <li>
        <button
          className={`${styles.menuBtn} ${styles.filter}`}
          onClick={() => handleButtonClick("pc")}
        >
          PC
        </button>
      </li>
      <li>
        <button
          className={`${styles.menuBtn} ${styles.filter}`}
          onClick={() => handleButtonClick("steam")}
        >
          Steam
        </button>
      </li>
      <li>
        <button
          className={`${styles.menuBtn} ${styles.filter}`}
          onClick={() => handleButtonClick("epic-games-store")}
        >
          Epic Games Store
        </button>
      </li>
      <li>
        <button
          className={`${styles.menuBtn} ${styles.filter}`}
          onClick={() => handleButtonClick("gog")}
        >
          GOG
        </button>
      </li>
      <li>
        <button
          className={`${styles.menuBtn} ${styles.filter}`}
          onClick={() => handleButtonClick("origin")}
        >
          Origin
        </button>
      </li>
      <li>
        <button
          className={`${styles.menuBtn} ${styles.filter}`}
          onClick={() => handleButtonClick("ubisoft")}
        >
          Ubisoft
        </button>
      </li>
      <li>
        <button
          className={`${styles.menuBtn} ${styles.filter}`}
          onClick={() => handleButtonClick("xbox-one")}
        >
          Xbox One
        </button>
      </li>
      <li>
        <button
          className={`${styles.menuBtn} ${styles.filter}`}
          onClick={() => handleButtonClick("ps4")}
        >
          PS4
        </button>
      </li>
      <li>
        <button
          className={`${styles.menuBtn} ${styles.filter}`}
          onClick={() => handleButtonClick("ps5")}
        >
          PS5
        </button>
      </li>
      <li>
        <button
          className={`${styles.menuBtn} ${styles.filter}`}
          onClick={() => handleButtonClick("switch")}
        >
          Nintendo
        </button>
      </li>
      <li>
        <button
          className={`${styles.menuBtn} ${styles.filter}`}
          onClick={() => handleButtonClick("android")}
        >
          Android
        </button>
      </li>
      <li>
        <button
          className={`${styles.menuBtn} ${styles.filter}`}
          onClick={() => handleButtonClick("ios")}
        >
          IOS
        </button>
      </li>
      <li>
        <button
          className={`${styles.menuBtn} ${styles.filter}`}
          onClick={() => handleButtonClick("drm-free")}
        >
          DRM-Free
        </button>
      </li>
      <li>
        <button
          className={`${styles.menuBtn} ${styles.filter}`}
          onClick={() => handleButtonClick("itchio")}
        >
          itch.io
        </button>
      </li>
    </ul>
  );
};

export default FilterMenu;
