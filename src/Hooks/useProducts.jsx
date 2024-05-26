import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://homedeco-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
        setLoading(false);
      });
  }, [setLoading]);

  return [products, loading];
};

export default useProducts;
