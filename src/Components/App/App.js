import './App.css';
import whiskerLogo from '../../assets/Whisker-Watch.png'
import menu from '../../assets/menu.png'
import RareCatBreeds from '../RareCatBreeds/RareCatBreeds'

import { getCats } from '../../APIcalls';

import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect, useParams } from 'react';


function App() {

  const [rareCatBreeds, setRareCatBreeds] = useState([]);
  const [allCatBreeds, setAllCatBreeds] = useState([]);


  /**
   when a user clicks a card 
   they will see the SingleCatBreed
   */

  useEffect(() => {
    getCats()
      .then(data => {
        const rareBreeds = data.filter(breed => breed.rare === 1 || (breed.description && breed.description.toLowerCase().includes('rare')))
        console.log(rareCatBreeds, 'rare cat breed Data from app')
        setRareCatBreeds(rareBreeds)
      })
      .catch(err => {
        console.error("Error fetching rare cat breeds from APP:", err);
        throw err
      })

      getCats()
      .then(data => {
        setAllCatBreeds(data)
      })
      .catch(err => {
        console.error("Error fetching all cat breeds from APP:", err);
        throw err
      })
  }, [])

  return (
    <>
      <header>
        <img src={menu} className='menu-png'/>
        <h1>
          Whisker
          <img src={whiskerLogo} alt='Whisker Logo' className='whisker-logo' />
          Watch
        </h1>
      </header>
      <Routes>
        <Route
          path='/'
          element={<RareCatBreeds rareCatBreeds={rareCatBreeds} />}
        />
        <Route
          path='/allCatBreeds'
          element={<allCatBreeds allCatBreeds={allCatBreeds} />}
        />
        <Route 
          path='/catBreed/:id'
          element={<singleCatBreed allCatBreeds={allCatBreeds} />}
        />
      </Routes>
      {/* <button className='see-all-cat-breed-button'>See all cat breeds</button> */}
      <footer>
        <div>Created By: Carissa Hluchan</div>
        <div>
          See it on:
          <a
            href="https://github.com/CarissaHluchan"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
