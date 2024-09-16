import './App.css';
import whiskerLogo from '../../assets/Whisker-Watch.png'
import RareCatBreeds from '../RareCatBreeds/RareCatBreeds'

import { getCats } from '../../APIcalls';

import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {

  const [ rareCatBreeds, setRareCatBreeds ] = useState([]);

  useEffect(() => {
    getCats()
      .then(data => {
        const rareBreeds = data.filter(breed => breed.rare === 1 || (breed.description && breed.description.toLowerCase().includes('rare')))
        console.log(rareCatBreeds, 'rare cat breed Data from app')
        setRareCatBreeds(rareBreeds)
      })
      .catch(err => {
        console.error("Error fetching cat breeds from APP:", err);
        throw err
      })
  }, [])

  return (
    <>
      <header>
        <h1>
          Whisker
          <img src={whiskerLogo} alt='Whisker Logo' className='whisker-logo' />
          Watch
        </h1>
      </header>
      <Routes>
        <Route
          path='/'
          element={<RareCatBreeds rareCatBreeds={rareCatBreeds}/>}
        />
      </Routes>
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
