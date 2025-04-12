import React, { useState, useEffect } from 'react';
import arrowr from '../../resources/svg/arrow-r.svg';
import HookCounter from '../app/hookcounter.js';
import { Link } from 'react-router-dom';
import Spinner from '../../helpers/spinner';
import './styles.css';
import { GET_PRODUCTS_LIST } from "../../helpers/constants";
console.log("API:", GET_PRODUCTS_LIST);
const CardsBlock = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    // Мок-данные (можно заменить позже на API)
    const fakeData = [
      {
        id: 1,
        title: 'Artistul 1',
        shortDescription: 'Descriere scurtă 1',
        image: 'https://via.placeholder.com/300x200',
        like: false,
        likeCount: 5
      },
      {
        id: 2,
        title: 'Artistul 2',
        shortDescription: 'Descriere scurtă 2',
        image: 'https://via.placeholder.com/300x200',
        like: true,
        likeCount: 12
      },
      {
        id: 3,
        title: 'Artistul 3',
        shortDescription: 'Descriere scurtă 3',
        image: 'https://via.placeholder.com/300x200',
        like: false,
        likeCount: 0
      }
    ];

    setTimeout(() => {
      setProductList(fakeData);
      setIsLoading(false);
    }, 1000);
  }, []);

  const renderGallery = () => {
    return productList.map(({ id, title, shortDescription, image, like, likeCount }) => (
      <div className="card-container" key={id}>
        <HookCounter likeCount={likeCount} like={like} />
        <Link to="/random">
          <div className="card">
            <div className="art">
              <img src={image} alt={title} />
            </div>
            <div className="button-room">
              <div className="art-descrip">
                <span>{title}</span>
                <h4>{shortDescription}</h4>
              </div>
              <button className="right-arrow">
                <img src={arrowr} alt="arrow" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    ));
  };

  return (
    <div className="cards">
      <div className="container">
        <div className="title-cards">
          <h1>Artiști noi</h1>
        </div>
        <div className="popular-cards">
          {isLoading ? <Spinner /> : renderGallery()}
        </div>
      </div>
    </div>
  );
};

export default CardsBlock;