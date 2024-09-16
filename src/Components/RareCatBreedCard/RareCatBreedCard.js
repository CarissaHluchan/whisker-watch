import './RareCatBreedCard.css';
import { Link } from 'react-router-dom';

function RareCatBreedCard({ id, name, image }) {

        return (
            <Link to={`/catBreed/${id}`} className='rare-cat-breed-card-wrapper' id={id} >
                <img src={image} alt={name} className='rare-cat-breed-img'/>
                <h3 className='rare-cat-breed-name'>{name}</h3>
            </Link>
        )
}

export default RareCatBreedCard;