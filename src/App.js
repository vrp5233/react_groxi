// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from './screen/login';
import SignUpComponent from './screen/signup';
import HomeComponent from './screen/homePage';




function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignUpComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
