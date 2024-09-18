import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './CatBreedCard.css';

function CatBreedCard({ id, name, image }) {
    return (
      <Link to={`/catBreed/${id}`} className='cat-breed-card' id={id}>
        <img src={image} alt={name} className='cat-breed-img' />
        <h3 className='cat-breed-name'>{name}</h3>
      </Link>
    );
  }
  
  CatBreedCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
  };
  
  export default CatBreedCard;