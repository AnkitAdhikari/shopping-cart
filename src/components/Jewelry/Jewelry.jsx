import { useOutletContext } from "react-router-dom";
import useFetch from "../../services/useFetch";
import Product from "../Product/Product";
import styles from "../AllProducts/AllProducts.module.css";

const Jewelry = () => {
  const [cart, setCart] = useOutletContext();
  const { products, loading, error } = useFetch("/category/womens-jewellery");
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
        <h1>Welcome to women Jewellery shop</h1>
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

export default Jewelry;
