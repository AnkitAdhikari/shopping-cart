import useFetch from "../../services/useFetch";
const Smartphones = () => {
  const { products, loading, error } = useFetch("/category/smartphones");

  if (loading) {
    return (
      <>
        <h1>Welcome to smartphone shop</h1>
        <p>Loading...</p>
      </>
    );
  } else if (error) {
    return (
      <>
        <h1>Welcome to smartphone shop</h1>
        <p>Loading...</p>
      </>
    );
  } else {
    return (
      <>
        <h1>Welcome to smartphone shop</h1>
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

export default Smartphones;
