import { useOutletContext } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";

const Cart = () => {
  const [cart, setCart] = useOutletContext();
  if (cart.length === 0) {
    return <p style={{ textAlign: "center" }}>cart is empty</p>;
  }
  let total = 0;
  return (
    <>
      {cart.map((product) => {
        console.log(product);
        total += product.totalPrice;
        return (
          <CartItem
            key={product.id}
            id={product.id}
            totalQty={product.totalQty}
            setCart={setCart}
          />
        );
      })}
      <div className={styles.checkout}>
        <div className={styles.totalSide}>Total: $ {total}</div>
        <div className={styles.checkoutSide}>
          <button className={styles.checkoutBtn} type='button'>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
