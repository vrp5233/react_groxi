import React from "react";
import ProductList from '../data/ProductList';
import ProductCard from "./ProductCard";
import './TrendingProduct.css'

// const currentURL = window.location.href;
const TrendingProductComponent = ({ noOfCols }) => {
   return (
      <>
         {ProductList.slice(ProductList.length - 6).map((product, i) => {
            return (
               <ProductCard noOfCols={noOfCols} key={i} product={product} />
            )
         })}
      </>
   )
}
export default TrendingProductComponent;


