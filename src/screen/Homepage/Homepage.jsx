import React, {useEffect,useState} from "react";
import { Link } from "react-router-dom";
// import { ButtonGroup, Row, Col, Container } from "react-bootstrap";
import HomeBanner from "./HomeBanner/HomeBanner";
import Categories from "./Categories/Categories";
import TrendingProduct from "./TrendingProduct/TrendingProduct";
import Welcome from "./Welcome/Welcome";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Base from "../../core/Base";
import axios from "axios";
// import ProductList from "../component/productList";
// const ProductList = [1,2];
const HomeComponent = () => {
  const [post, setPost] = useState(null)
  const baseURL = "http://localhost/groxi-api/api/v1/get-products";

  useEffect(() => {
    axios.post(baseURL).then((response) => {
      console.log(response.data);
    });
  }, [])
  return (
    <Base>

      <HomeBanner />
      <Categories />
      <TrendingProduct />
      <Welcome />
      <FeaturedProducts />
    </Base>
  );
};

export default HomeComponent;
