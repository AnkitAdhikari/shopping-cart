import { useOutletContext } from "react-router-dom";
import useFetch from "../../services/useFetch";
import Product from "../Product/Product";
import styles from "./AllProducts.module.css";

const AllProducts = () => {
  const [cart, setCart] = useOutletContext();
  const { products, loading, error } = useFetch();

  if (loading) {
    return (
      <>
        <h1>Welcome to Tick Cart</h1>
        <p>Loading...</p>
      </>
    );
  } else if (error) {
    return (
      <>
        <h1>Welcome to Tick Cart</h1>
        <p>Loading...</p>
      </>
    );
  } else {
    return (
      <>
        <h1>Welcome to Tick Cart</h1>
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

export default AllProducts;
