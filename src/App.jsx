// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginComponent from './screen/Login';
import SignUpComponent from './screen/Signup';
// import HomeComponent from './screen/homePage';
import ContactComponent from './screen/Contact';
import AboutComponent from './screen/About';
import PagesComponent from './screen/Pages';
import ShopComponent from './screen/Shop';
import BlogComponent from './screen/Blog';
import ProductDetailsComponent from './screen/ProductDetails/ProductDetails';
import ErrorComponent from './screen/Error';
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
        <Route path="/product-details/:id" exact component={ProductDetailsComponent} />
        <Route path="" component={ErrorComponent} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
