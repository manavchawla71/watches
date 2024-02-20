import React from "react";
import { useEffect, useState } from "react";
import watches from "./products.json";
const ProductListing = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    setproducts(watches);
  }, []);
  return <div></div>;
};

export default ProductListing;
