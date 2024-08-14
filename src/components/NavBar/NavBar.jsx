import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Icon from "@mdi/react";
import { mdiCartVariant } from "@mdi/js";
import PropTypes from "prop-types";
import styles from "./NavBar.module.css";

const NavBar = ({ itemsOnCart = 0 }) => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.brandContainer}>
          <img className={styles.brandLogo} src={logo} alt='Brand Logo' />
          <p className={styles.brand}>Tick Cart</p>
        </div>
        <nav className={styles.nav}>
          <Link className={styles.navLink} to='all-products'>
            All Products
          </Link>
          <Link className={styles.navLink} to='/'>
            Home
          </Link>
          <Link className={styles.navLink} to='about'>
            About
          </Link>
          <Link className={styles.cart} to='cart'>
            <Icon path={mdiCartVariant} size={1.1} />
            {itemsOnCart}
          </Link>
        </nav>
      </div>
    </>
  );
};

NavBar.propTypes = {
  itemsOnCart: PropTypes.number,
};

export default NavBar;
