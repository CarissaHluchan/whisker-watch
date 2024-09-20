import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './FavoriteCatBreeds.css';
import defaultCatImage from '../../assets/default-cat.png';
import FavoriteCatBreedCard from '../FavoriteCatBreedCard/FavoriteCatBreedCard';

function FavoriteCatBreeds({ favoriteCatBreeds = [], removeFromFavoriteCatBreeds }) {

    const navigate = useNavigate();

    const handleViewRareBreeds = () => {
        navigate('/');
    }

    const handleViewAllBreeds = () => {
        navigate('/allCatBreeds');
    }

    const favoriteCatBreedCards = favoriteCatBreeds.map((breed) => (
        <FavoriteCatBreedCard
          id={breed.id}
          key={breed.id}
          name={breed.name}
          image={breed.image ? breed.image.url : defaultCatImage}
          removeFromFavoriteCatBreeds={() => removeFromFavoriteCatBreeds(breed)}
        />
      ));

    return (
        <main className='favorite-cat-breed-main'>
            <div className='nav-button-wrapper'>
                <button onClick={handleViewAllBreeds}>All Breeds</button>
                <button onClick={handleViewRareBreeds}>Rare Breeds</button>
            </div>
            <h2 className='favorite-cat-breed-title'>My Favorite Cat Breeds</h2>
            <section className='favorite-cat-breed-container'>
                {favoriteCatBreedCards}
            </section>
        </main>
    );
}

FavoriteCatBreeds.protoType = {
    favoriteCatBreeds: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.shape({
                url: PropTypes.string
            })
        })
    ).isRequired,
    removeFromFavoriteCatBreeds: PropTypes.func.isRequired
};

export default FavoriteCatBreeds;
