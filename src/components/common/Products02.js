import React, { useEffect, useState } from "react";
import Product02 from "../common/Product02";

const Products02 = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      {products.map((product) => (
        <Product02 product={product} key={product.id} />
      ))}
    </>
  );
};

export default Products02;