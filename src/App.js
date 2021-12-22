// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from './screen/login';
import SignUpComponent from './screen/signup';
import HomeComponent from './screen/homePage';
import ContactComponent from './screen/contact';
import AboutComponent from './screen/about';
import PagesComponent from './screen/pages';
import ShopComponent from './screen/shop';
import BlogComponent from './screen/blog';




function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/pages" element={<PagesComponent />} />
        <Route path="/shop" element={<ShopComponent />} />
        <Route path="/blog" element={<BlogComponent />} />
        <Route path="/shop" element={<ShopComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignUpComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
