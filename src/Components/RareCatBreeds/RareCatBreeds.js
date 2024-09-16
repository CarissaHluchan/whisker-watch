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
            {catBreedCards}
        </main>
    )
}

export default RareCatBreeds;