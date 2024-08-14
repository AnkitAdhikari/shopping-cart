import { useState } from "react";
import styles from "./Product.module.css";
import PropTypes from "prop-types";

const Product = ({ id, cart, setCart, imgURL, name, price, stock }) => {
  const [qty, setQty] = useState(1);

  const incrementQty = () => {
    if (qty < stock) {
      setQty(qty + 1);
    }
  };
  const decrementQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const addToCart = () => {
    let copy = cart.slice(0);
    let index = cart.findIndex((product) => product.id === id);
    if (index >= 0) {
      copy[index].totalQty = qty;
      copy[index].totalPrice = qty * price;
    } else {
      copy.push({ id, totalQty: qty, totalPrice: qty * price });
    }
    setCart(copy);
  };

  return (
    <div className={styles.productContainer}>
      <div className='productImageContainer'>
        <img src={imgURL} alt={name} />
      </div>
      <p className={styles.productName}>{name}</p>
      <p className={styles.productPrice}>$ {price}</p>
      <div className='qtyContainer'>
        <button
          className={styles.incrementBtn}
          type='button'
          onClick={decrementQty}
        >
          -
        </button>
        <input className={styles.qty} type='number' value={qty} readOnly />
        <button
          className={styles.decrementBtn}
          type='button'
          onClick={incrementQty}
        >
          +
        </button>
      </div>
      <div className='buttonContainer'>
        <button onClick={addToCart} className={styles.atcBtn} type='button'>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  imgURL: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
  id: PropTypes.number,
  setCart: PropTypes.func,
  cart: PropTypes.array,
};

export default Product;
