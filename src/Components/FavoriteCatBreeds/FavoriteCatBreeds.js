import './FavoriteCatBreeds.css';
import defaultCatImage from '../../assets/default-cat.png';
import FavoriteCatBreedCard from '../FavoriteCatBreedCard/FavoriteCatBreedCard';
import { useNavigate } from 'react-router-dom';

function FavoriteCatBreeds({ FavoriteCatBreeds = [], removeFromFavoriteCatBreeds }) {

    const navigate = useNavigate();

    const favoriteCatBreedCards = FavoriteCatBreeds.map(breed => {
        return (
            <FavoriteCatBreedCard 
                id={breed.id}
                key={breed.id}
                name={breed.name}
                image={breed.image ? breed.image.url : defaultCatImage}
                removeFromFavoriteCatBreeds={() => removeFromFavoriteCatBreeds(breed.id)}
            />
        )
    })

    const handleViewRareBreeds = () => {
        navigate('/')
    }

    const handleViewAllBreeds = () => {
        navigate('/allCatBreeds')
    }

    return (
        <main className='favorite-cat-breed-main'>
            <div className='nav-button-wrapper'>
                <button onClick={handleViewRareBreeds}>Rare Breeds</button>
                <button onClick={handleViewAllBreeds}>All Breeds</button>
            </div>
            <h2 className='favorite-cat-breed-title'>My Favorite Cat Breeds</h2>
            <section className='favorite-cat-breed-container'>
                {favoriteCatBreedCards}
            </section>
        </main>
    )
}

export default FavoriteCatBreeds;