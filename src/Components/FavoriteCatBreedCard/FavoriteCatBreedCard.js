import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import defaultCatImage from '../../assets/default-cat.png';
import './FavoriteCatBreedCard.css';

function FavoriteCatBreedCard({ id, name = 'Unknown Breed', image = defaultCatImage, removeFromFavoriteCatBreeds }) {
    const handleRemoveClick = (event) => {
        event.preventDefault();
        removeFromFavoriteCatBreeds(id);
    }

    return (
        <Link to={`/catBreed/${id}`} className='favorite-cat-breed-card-wrapper' id={id}>
            <h3 className='favorite-cat-breed-name'>{name}</h3>
            <img src={image} alt={name} className='favorite-cat-breed-img' />
            <button className='remove-from-favorites-button' onClick={handleRemoveClick}>Remove from Favorites</button>
        </Link>
    )
}

FavoriteCatBreedCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    removeFromFavoriteCatBreeds: PropTypes.func.isRequired
};

export default FavoriteCatBreedCard;