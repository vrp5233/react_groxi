import React from "react";
import ProductList from './ProductList';
import ProductCard from "./ProductCard";

// const currentURL = window.location.href;
const TrendingProductComponent = ({ noOfCols }) => {
   const currentURL = window.location.pathname;
   console.log(currentURL)
   return (
      <>
         {ProductList.map((product, i) => {
            return (
               <ProductCard noOfCols={noOfCols} key={i} product={product} />
            )
         })}
      </>
   )
}
export default TrendingProductComponent;


