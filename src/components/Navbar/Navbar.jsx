import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = ({ logo, link1, link2 }) => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navbarLogo}>
        {logo}
      </Link>
      <div className={styles.hamburger}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={styles.navbarItems}>
        <li className={styles.navbarItem}>
          <Link to="/about" className={styles.navbarLink}>
            {link1}
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/faq" className={styles.navbarLink}>
            {link2}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
