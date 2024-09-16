import './SingleCatBreed.css';
import { useParams } from 'react-router-dom';

function SingleCatBreed({ allCatBreeds }) {

    const { id } = useParams();
    const catBreed = allCatBreeds.find(catBreed => catBreed.id === id);

    return (
        <section>

        </section>
    )
}

export default SingleCatBreed;