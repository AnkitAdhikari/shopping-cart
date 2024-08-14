import { useEffect, useState } from "react";
const useFetch = (extra = "") => {
  const URL = "https://dummyjson.com/products";
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(URL + extra)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProducts(response.products))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [extra]);
  return { products, error, loading };
};

export default useFetch;
