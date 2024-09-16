import './App.css';
import whiskerLogo from '../../assets/Whisker-Watch.png'
import AllCatBreeds from '../AllCatBreeds/AllCatBreeds'

import { getCats } from '../../APIcalls';

import { Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    getCats()
      .then(catBreedData => console.log(catBreedData, 'catBreedData from app'))
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
          element={<AllCatBreeds />}
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
