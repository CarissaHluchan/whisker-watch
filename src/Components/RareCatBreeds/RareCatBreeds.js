import './RareCatBreeds.css';
import RareCatBreedCard from '../RareCatBreedCard/RareCatBreedCard';

function RareCatBreeds({ rareCatBreeds }) {

    console.log(rareCatBreeds)

    const catBreedCards = rareCatBreeds.map(rareCatBreed => {
        return (
            <RareCatBreedCard
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
                    <p className='rare-cat-breed-instructions'>Explore rare cat breeds.
                        Scroll through and click on a cat to learn more about that breed.
                        Discover their temperament, weight, lifespan and more.
                        Add breeds you like to a list of favorites and learn more about them.
                    </p>
                </div>
                <button className='my-favorite-cats-button'>My favorite cats</button>
            </div>
            <div className='rare-cat-breed-container'>{catBreedCards}</div>
            {/* <button className='see-all-cat-breed-button'>See all cat breeds</button> */}
        </main>
    )
}

export default RareCatBreeds;