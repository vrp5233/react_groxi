import React, { useEffect, useState } from "react";
// import ProductList from "../data/ProductList";
import ProductCard from "./ProductCard";
import "./TrendingProduct.css";
import axiosConfig from "../AxiosConfig";


// const currentURL = window.location.href;
const TrendingProductComponent = ({ noOfCols }) => {

   const [products, setProducts] = useState([]);
   const [img, setImg] = useState('');

  const fetchData = () => {
    axiosConfig
      .post("get-products")
      .then((response) => {
        if(response?.data.data.products) {
           setProducts(response.data.data.products)
        }
        if(response?.data.data.file_path) {
          setImg(response.data.data.file_path)
        }
      })
      .catch((error) => {
        console.log(error)
      });
  };

  useEffect(() => {
   fetchData();
  }, [])

  return (
    <>
      {products.map((product) => {
        return <ProductCard noOfCols={noOfCols} key={product.id} product={product} img={img} />;
      })}
    </>
  );
};
export default TrendingProductComponent;
