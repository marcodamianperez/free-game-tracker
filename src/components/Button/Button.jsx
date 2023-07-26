import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const Button = ({ text, buttonType, location }) => {
  return (
    <Link
      to={location}
      className={`${styles.btn} ${
        buttonType === "white" ? styles.btnWhite : styles.btnColor
      }`}
    >
      {text}
    </Link>
  );
};

export default Button;
