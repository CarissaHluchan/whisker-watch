import './SingleCatBreed.css';

function SingleCatBreed({ allCatBreeds }) {

    const { id } = useParams();
    const catBreed = allCatBreeds.find(catBreed => catBreed.id === id);

    return (
        <section>

        </section>
    )
}

export default SingleCatBreed;