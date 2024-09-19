import PropTypes from 'prop-types';
import CatBreedCard from '../CatBreedCard/CatBreedCard';
import { useNavigate } from 'react-router-dom';
import './RareCatBreeds.css';

function RareCatBreeds({ rareCatBreeds }) {
    const navigate = useNavigate();

    const handleViewFavorites = () => {
        navigate('/favoriteCatbreeds')
    }

    const catBreedCards = rareCatBreeds.map(rareCatBreed => {
        return (
            <CatBreedCard
                id={rareCatBreed.id}
                key={rareCatBreed.id}
                name={rareCatBreed.name}
                image={rareCatBreed.image.url}
            />
        )
    })

    return (
        <main className='rare-cat-breed-main'>
            <div className='rare-cat-breed-header'>
                <div className='rare-cat-breed-title-wrapper'>
                    <h2 className='rare-cat-breed-title'>Rare Cat breeds</h2>
                    <p className='rare-cat-breed-instructions'>
                        Explore rare cat breeds.
                        Scroll through and click on a cat to learn more about that breed.
                        Discover their temperament, weight, lifespan and more.
                        Add breeds you like to a list of favorites and learn more about them.
                    </p>
                </div>
                <button
                    className='my-favorite-cats-button'
                    onClick={handleViewFavorites}
                >
                    My favorite cats
                </button>
            </div>
            <div className='rare-cat-breed-container'>
                {catBreedCards}
            </div>
        </main>
    )
}

RareCatBreeds.defaultProps = {
    catBreed: {
      name: 'Unknown',
      image: {
        url: 'default_image_url'
      }
    }
  };

RareCatBreeds.propTypes = {
    rareCatBreeds: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.shape({
                url: PropTypes.string,
            }),
        })
    ).isRequired,
};

export default RareCatBreeds;
