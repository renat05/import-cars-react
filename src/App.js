import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Main';
import Nav from './components/Navigation';
import Footer from './components/Footer';
import Contact from './components/Contact'
import Product from './components/Product';
import Favourites from './components/Favorites';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cars from './index.json';

function App() {
  const [filteredCars, setFilteredCars] = useState([]);
  const allCars = Cars.cars;
  const notify = () => toast("car add in favorites");

  const handleSearch = (searchTerm) => {
    const filteredResults = allCars.filter((item) => {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredCars(filteredResults);
  };

  return (
    <BrowserRouter>
      <ToastContainer />
      <Nav onSearch={handleSearch} />
      <Routes>
        <Route path='/favorites' element={<Favourites />} />
        <Route path="/" element={<Main notify={notify} filteredCars={filteredCars.length > 0 ? filteredCars : allCars} />} />
        <Route path="/product/:id" element={<Product allCars={allCars} />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>  
      <Footer /> 
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
