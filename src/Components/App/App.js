import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import whiskerLogo from '../../assets/Whisker-Watch.png';
import menu from '../../assets/menu.png';
import Nav from '../Nav/Nav';
import RareCatBreeds from '../RareCatBreeds/RareCatBreeds';
import AllCatBreeds from '../AllCatBreeds/AllCatBreeds';
import SingleCatBreed from '../SingleCatBreed/SingleCatBreed';
import FavoriteCatBreeds from '../FavoriteCatBreeds/FavoriteCatBreeds';
import ErrorPage from '../ErrorPage/ErrorPage';
import { getCats } from '../../APIcalls';

function App() {
  const [rareCatBreeds, setRareCatBreeds] = useState([]);
  const [allCatBreeds, setAllCatBreeds] = useState([]);
  const [favoriteCatBreeds, setFavoriteCatBreeds] = useState([]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCatBreeds = async () => {
      try {
        const data = await getCats();
        const rareBreeds = data.filter(breed =>
          breed.rare === 1 ||
          (breed.description && breed.description.toLowerCase().includes('rare'))
        );
        setRareCatBreeds(() => rareBreeds);
        setAllCatBreeds(() => data);
      } catch (err) {
        console.error("Error fetching rare cat breeds from APP:", err);
        navigate(`/error/${err.statusCode || 500}`, { state: { message: err.message || 'An unexpected error occurred.' } });
      }
    };

    fetchCatBreeds();
  }, [navigate]);

  const addToFavoriteCatBreeds = (newFavoriteCatBreed) => {
    setFavoriteCatBreeds(prevFavorites => {
      if (prevFavorites.some(breed => breed.id === newFavoriteCatBreed.id)) {
        return prevFavorites;
      }
      return [...prevFavorites, newFavoriteCatBreed];
    });
  };

  const removeFromFavoriteCatBreeds = (catBreedToRemove) => {
    setFavoriteCatBreeds(prevFavorites =>
      prevFavorites.filter(breed => breed.id !== catBreedToRemove.id)
    );
  };

  return (
    <>
      <header>
        <img
          src={menu}
          className='menu-png'
          alt="Hamburger Menu"
          onMouseEnter={() => setIsNavOpen(true)}
          onMouseLeave={() => setIsNavOpen(false)}
        />
        {isNavOpen && <Nav setIsNavOpen={setIsNavOpen} />}
        <h1>Whisker<img src={whiskerLogo} alt='Logo' className='whisker-logo' />Watch</h1>
      </header>

      <Routes>
        <Route
          path='/'
          element={<RareCatBreeds rareCatBreeds={rareCatBreeds} />}
        />
        <Route
          path='/allCatBreeds'
          element={<AllCatBreeds allCatBreeds={allCatBreeds} />}
        />
        <Route
          path='/catBreed/:id'
          element={<SingleCatBreed allCatBreeds={allCatBreeds} addToFavoriteCatBreeds={addToFavoriteCatBreeds} />}
        />
        <Route
          path='/favoriteCatbreeds'
          element={<FavoriteCatBreeds favoriteCatBreeds={favoriteCatBreeds} removeFromFavoriteCatBreeds={removeFromFavoriteCatBreeds} />}
        />
        <Route path='/error/:code' element={<ErrorPage />}></Route>
        <Route path='*' element={<ErrorPage error={404} />}></Route>
      </Routes>

      <footer>
        <div>Created By: Carissa Hluchan</div>
        <a
          href="https://github.com/CarissaHluchan"
          target="_blank"
          rel="noopener noreferrer"
          className='url-link-github'
        >
          See it on: GitHub
        </a>
      </footer>
    </>
  );
}

export default App;
