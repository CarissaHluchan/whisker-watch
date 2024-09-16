import './App.css';
import whiskerLogo from '../../assets/whiskers.png'
import AllCatBreeds from '../AllCatBreeds/AllCatBreeds'

import { getCats } from '../../APIcalls';

import { Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    getCats()
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
        {/* <Link></Link> */}
      </footer>
    </>
  );
}

export default App;
