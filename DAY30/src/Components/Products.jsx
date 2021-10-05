import React from "react";
import { useFetchProducts } from "../Hooks/useFetchProducts";
import CardComponent from "./CardComponent";
import { useSelector } from "react-redux";

const Products = () => {
  const [loading] = useFetchProducts();
  const allProducts = useSelector((state) => state.allProducts.products);
  console.log(allProducts);
  return (
    <div className="products">
      {loading ? (
        <h1 className="loading">LOADing</h1>
      ) : (
        allProducts &&
        allProducts.length > 0 &&
        allProducts.map((item) => {
          return <CardComponent item={item} key={item.id} />;
        })
      )}
    </div>
  );
};

export default Products;
