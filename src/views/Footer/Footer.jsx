import styles from "./Footer.module.scss";

const Footer = ({ author, link }) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        Design and development&nbsp;
        <a href={link} className={styles.author} target="_blank">
          {author}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
