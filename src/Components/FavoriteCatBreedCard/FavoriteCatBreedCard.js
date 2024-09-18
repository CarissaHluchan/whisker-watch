import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FavoriteCatBreedCard.css';

function FavoriteCatBreedCard({ id, name, image, removeFromFavoriteCatBreeds }) {
  const handleRemoveClick = (event) => {
    event.preventDefault();
    removeFromFavoriteCatBreeds(id);
  };

  return (
    <div className="favorite-cat-breed-card">
      <Link to={`/catBreed/${id}`} className="favorite-cat-breed-card-link">
        <h3 className="favorite-cat-breed-name">{name}</h3>
        <img src={image} alt={name} className="favorite-cat-breed-img" />
      </Link>
      <button
        className="remove-from-favorites-button"
        onClick={handleRemoveClick}
      >
        Remove from Favorites
      </button>
    </div>
  );
}

FavoriteCatBreedCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  removeFromFavoriteCatBreeds: PropTypes.func.isRequired,
};

export default FavoriteCatBreedCard;
