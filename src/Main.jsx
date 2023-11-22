import React, { useState, useEffect } from "react";
import './Main.css';
import Cars from './index.json';
import { toast } from "react-toastify";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from "react-router-dom";
import Product from './components/Product'

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState({});
  const [but, setBut] = React.useState(false)
  const itemsPerPage = 6;
  const allCars = Cars.cars;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allCars.slice(indexOfFirstItem, indexOfLastItem);

  const navigate = useNavigate();

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleAddToFavorite = (id, title, image, info, price) => {
    const newFavorites = { ...favorites };

    if (newFavorites[id]) {
      // Если элемент уже в избранном, удаляем его
      delete newFavorites[id];
      toast.success('Удалено из избранного');
    } else {
      // Если элемента нет в избранном, добавляем его
      newFavorites[id] = {title, image, info, price };
      toast.success('Добавлено в избранное');
    }

    setFavorites(newFavorites);
  }

  const clickBtn = (id) => {
    handleAddToFavorite(id);
    setBut(!but);
  };

  const isFavorite = (id) => {
    return (favorites[id]);
  };

  return (
    <div className="category">
      {currentItems.map((car, index) => (
        <div key={index} className="item">
          <img className="img" width='100%' src={car.img} alt={car.title} />
          <span className="title">{car.title}</span>
          <p className='info'>{car.info}</p>
          <p>{car.price}</p>

          <Link to={`/product/${car.id}`}>
            <span className="link">Подробнее</span>
          </Link>

          <span onClick={() => clickBtn(car.id)} className="link">
            {isFavorite(car.id) ? 'Удалить из избранных' : 'В избранное'}
          </span>
        </div>
      ))}

      <div className="pagination">
        {currentPage > 1 && <button onClick={prevPage}>Предыдущая</button>}
        {currentItems.length === itemsPerPage && <button onClick={nextPage}>Следующая</button>}
      </div>
    </div>
  );
}

export default Main;
