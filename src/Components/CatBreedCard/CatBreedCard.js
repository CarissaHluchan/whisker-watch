import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CatBreedCard.css';

function CatBreedCard({ id, name, image }) {
    return (
        <Link to={`/catBreed/${id}`} className='rare-cat-breed-card-wrapper' id={id}>
            <img src={image} alt={name} className='rare-cat-breed-img' />
            <h3 className='rare-cat-breed-name'>{name}</h3>
        </Link>
    )
}

CatBreedCard.defaultProps = {
    catBreed: {
      name: 'Unknown',
      image: {
        url: 'default_image_url'
      }
    }
  };

CatBreedCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default CatBreedCard;