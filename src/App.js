// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginComponent from './screen/login';
import SignUpComponent from './screen/signup';
import HomeComponent from './screen/homePage';
import ContactComponent from './screen/contact';
import AboutComponent from './screen/about';
import PagesComponent from './screen/pages';
import ShopComponent from './screen/shop';
import BlogComponent from './screen/blog';
import ProductDetailsComponent from './screen/productDetails';
import ErrorComponent from './screen/error';
import Homepage from './screen/Homepage/Homepage';
import ScrollToTop from './core/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/contact" component={ContactComponent} />
        <Route path="/pages" component={PagesComponent} />
        <Route path="/shop" component={ShopComponent} />
        <Route path="/blog" component={BlogComponent} />
        <Route path="/shop" component={ShopComponent} />
        <Route path="/login" component={LoginComponent} />
        <Route path="/signup" component={SignUpComponent} />
        <Route path="/product-details" component={ProductDetailsComponent} />
        <Route path="" component={ErrorComponent} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
