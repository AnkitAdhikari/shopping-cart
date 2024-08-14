import useFetch from "../../services/useFetch";
import Product from "../Product/Product";
import styles from "../AllProducts/AllProducts.module.css";
import { useOutletContext } from "react-router-dom";
const Watches = () => {
  const [cart, setCart] = useOutletContext();
  const { products, loading, error } = useFetch("/category/mens-watches");

  if (loading) {
    return (
      <>
        <h1>Welcome to Watches shop</h1>
        <p>Loading...</p>
      </>
    );
  } else if (error) {
    return (
      <>
        <h1>Welcome to Watches shop</h1>
        <p>Loading...</p>
      </>
    );
  } else {
    return (
      <>
        <h1>Welcome to Watches shop</h1>
        <div className={styles.products}>
          {products.map((product) => (
            <Product
              id={product.id}
              setCart={setCart}
              cart={cart}
              imgURL={product.thumbnail}
              name={product.title}
              stock={product.stock}
              price={product.price}
              key={product.id}
            />
          ))}
        </div>
      </>
    );
  }
};

export default Watches;
