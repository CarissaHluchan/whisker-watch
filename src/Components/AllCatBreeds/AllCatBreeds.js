import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './AllCatBreeds.css';
import defaultCatImage from '../../assets/default-cat.png';
import CatBreedCard from '../CatBreedCard/CatBreedCard';

function AllCatBreeds({ allCatBreeds }) {
    const navigate = useNavigate();

    const handleViewFavorites = () => {
        navigate('/favoriteCatbreeds');
    }

    const catBreedCards = allCatBreeds
        .filter(catBreed => catBreed.image && catBreed.image.url)
        .map(catBreed => {
            return (
                <CatBreedCard
                    id={catBreed.id}
                    key={catBreed.id}
                    name={catBreed.name}
                    image={catBreed.image && catBreed.image.url ? catBreed.image.url : defaultCatImage}
                />
            )
        })

    return (
        <main className='all-cat-breed-main'>
            <div className='all-cat-breed-header'>
                <div className='all-cat-breed-title-wrapper'>
                    <h2 className='all-cat-breed-title'>All Cat Breeds</h2>
                    <p className='all-cat-breed-instructions'>
                        Explore all the cat breeds we have. Scroll through and click on a
                        cat to learn more about that breed. Discover their temperament,
                        weight, lifespan, and more. Add breeds you like to a list of
                        favorites and learn more about them.
                    </p>
                </div>
                <button
                    className='my-favorite-cats-button'
                    onClick={handleViewFavorites}
                >
                    My Favorite Cats
                </button>
            </div>
            <div className='all-cat-breed-container'>{catBreedCards}</div>
        </main>
    );
}

AllCatBreeds.PropTypes = {
    allCatBreeds: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.shape({
                url: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired
    ).isRequired,
};

export default AllCatBreeds;