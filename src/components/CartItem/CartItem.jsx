import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "../Product/Product.module.css";

function CartItem({ id, totalQty, setCart }) {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProduct(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [id]);

  const removeFromCart = () => {
    setCart((cart) => cart.filter((product) => product.id != id));
  };

  if (loading) {
    return (
      <>
        <h1>Welcome to women Jewellery shop</h1>
        <p>Loading...</p>
      </>
    );
  } else if (error) {
    return (
      <>
        <p>error getting data</p>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.productContainer}>
          <div className='productImageContainer'>
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <p className={styles.productName}>{product.title}</p>
          <p>Quantity: {totalQty}</p>
          <p className={styles.productPrice}>
            Amount: $ {product.price * totalQty}
          </p>
          <div className='buttonContainer'>
            <button
              onClick={removeFromCart}
              className={styles.removeBtn}
              type='button'
            >
              Remove
            </button>
          </div>
        </div>
      </>
    );
  }
}

CartItem.propTypes = {
  id: PropTypes.number,
  totalQty: PropTypes.number,
  setCart: PropTypes.func,
};

export default CartItem;
