import Button from "../../components/Button/Button";
import Navbar from "./../../components/Navbar/Navbar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar logo="free game tracker" link1="About" link2="faq" />

      <div className={styles.uContainer}>
        <div className={styles.headerTextBox}>
          <h1 className={styles.headingPrimary}>
            <div className={styles.headingPrimaryMain}>
              Free Games, DLCs & In-Game Items
            </div>
            <div className={styles.headingPrimarySub}>
              Find, track and claim limited-time freebies
            </div>
          </h1>
          <Button text="show me" buttonType="white" location="#giveaways" />
        </div>
      </div>
    </header>
  );
};

export default Header;
