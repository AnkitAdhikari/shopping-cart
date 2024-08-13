import useFetch from "../../services/useFetch";

const Jewelry = () => {
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
        <h1>Welcome to women Jewellery shop</h1>
        <p>Loading...</p>
      </>
    );
  } else {
    return (
      <>
        <h1>Welcome to women Jewellery shop</h1>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <img src={product.thumbnail} alt={product.title} />
            </div>
          );
        })}
      </>
    );
  }
};

export default Jewelry;
