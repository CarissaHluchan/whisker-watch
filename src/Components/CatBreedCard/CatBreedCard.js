import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import defaultCatImage from '../../assets/default-cat.png';
import './CatBreedCard.css';

function CatBreedCard({ id, name = 'Unknown Breed', image = defaultCatImage }) {
    return (
        <Link to={`/catBreed/${id}`} className='cat-breed-card-wrapper' id={id}>
            <img src={image} alt={name} className='cat-breed-img' />
            <h3 className='cat-breed-name'>{name}</h3>
        </Link>
    )
}

CatBreedCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default CatBreedCard;