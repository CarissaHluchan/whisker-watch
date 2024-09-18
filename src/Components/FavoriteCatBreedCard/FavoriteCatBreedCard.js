import PropTypes from 'prop-types';
import './FavoriteCatBreedCard.css';
import { Link } from "react-router-dom";

function FavoriteCatBreedCard({ id, name, image, removeFromFavoriteCatBreeds }) {

    const handleRemoveClick = (event) => {
        event.preventDefault();
        removeFromFavoriteCatBreeds(id)
    }

    return (
        <Link to={`/catBreed/${id}`} className='favorite-cat-breed-card-wrapper' id={id} >
            <h3 className='favorite-cat-breed-name'>{name}</h3>
            <img src={image} alt={name} className='favorite-cat-breed-img' />
            <button
                className='remove-from-favorites-button'
                onClick={handleRemoveClick}
            >
                Remove from Favorites
            </button>
        </Link>
    )
}

export default FavoriteCatBreedCard;

FavoriteCatBreedCard.propTypes = {
    image : PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
}