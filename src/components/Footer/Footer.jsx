import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        developed by &nbsp;
        <a className={styles.author} href='github.com/AnkitAdhikari'>
          ankit adhikari
        </a>
      </footer>
    </>
  );
};

export default Footer;
