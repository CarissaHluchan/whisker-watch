import './RareCatBreedCard.css';

function RareCatBreedCard({ id, key, name, image }) {

        return (
            <div className='rare-cat-breed-card-wrapper' id={id} key={key}>
                <img src={image} alt={name} className='rare-cat-breed-img'/>
                <h3 className='rare-cat-breed-name'>{name}</h3>
            </div>
        )
}

export default RareCatBreedCard;