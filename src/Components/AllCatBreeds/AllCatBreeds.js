import '../RareCatBreeds/RareCatBreeds.css';
import CatBreedCard from '../CatBreedCard/CatBreedCard';
import { useNavigate } from 'react-router-dom';

function AllCatBreeds({ allCatBreeds }) {

    const navigate = useNavigate();

    const handleViewFavorites = () => {
        navigate('/favoriteCatbreeds')
    }

    const catBreedCards = allCatBreeds.map(catBreed => {
        return (
            <CatBreedCard
                id={catBreed.id}
                key={catBreed.id}
                name={catBreed.name}
                image={catBreed.image && catBreed.image.url ? catBreed.image.url : 'default-image-url-here'}
            />
        )
    })

    return (
        <main className='rare-cat-breed-main'>
            <div className='rare-cat-breed-header'>
                <div className='rare-cat-breed-title-wrapper'>
                    <h2 className='rare-cat-breed-title'>All Cat breeds</h2>
                    <p className='rare-cat-breed-instructions'>Explore all the cat breeds we have.
                        Scroll through and click on a cat to learn more about that breed.
                        Discover their temperament, weight, lifespan and more.
                        Add breeds you like to a list of favorites and learn more about them.
                    </p>
                </div>
                <button className='my-favorite-cats-button' onClick={handleViewFavorites}>My favorite cats</button>
            </div>
            <div className='rare-cat-breed-container'>{catBreedCards}</div>
        </main>
    )
}

export default AllCatBreeds;