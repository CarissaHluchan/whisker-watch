import PropTypes from 'prop-types';
import './SingleCatBreed.css';
import { useParams, useNavigate } from 'react-router-dom';

function SingleCatBreed({ allCatBreeds, addToFavoriteCatBreeds }) {

    const { id } = useParams();
    const catBreed = allCatBreeds.find(catBreed => catBreed.id === id);
    const navigate = useNavigate();

    const handleAddToFavorites = () => {
        addToFavoriteCatBreeds(catBreed); 
        alert(`${catBreed.name} has been added to your favorites!`);
    };

    const handleViewAllBreeds = () => {
        navigate('/allCatBreeds')
    }

    const handleViewRareBreeds = () => {
        navigate('/')
    }

    const handleViewFavorites = () => {
        navigate('/favoriteCatbreeds')
    }

    const convertTrait = (trait) => trait === 0 ? 'No' : 'Yes';

    return (
        <section className='sinlge-cat-section'>
            <div className='single-breed-button-wrapper'>
                <button onClick={handleViewAllBreeds}>All Breeds</button>
                <button onClick={handleViewRareBreeds}>Rare Breeds</button>
                <button onClick={handleViewFavorites}>My Favorite Breeds</button>
            </div>
            <div className='single-cat-all-wrapper'>
                <div className='add-to-favorites-button-wrapper'>
                    <button className='add-to-favorites-button' onClick={handleAddToFavorites}>Add Breed to Favorites</button>
                </div>
                <h3 className='single-cat-breed-name'>{catBreed.name}</h3>

                <div className='single-cat-img-des-wrapper'>
                    <img className='single-cat-breed-image' src={catBreed.image.url} />
                    <div className='description-wrapper'>
                        <div className='single-cat-content-title'>Description</div>
                        <div className='single-cat-content'>{catBreed.description}</div>
                    </div>
                </div>


                <div className='termperament-wrapper'>
                    <div className='single-cat-content-title'>Temperament</div>
                    <div className='single-cat-content-temperment'>{catBreed.temperament}</div>
                </div>

                <div className='wrapper-weight-lifespan-country'>
                    <div className='weight-wrapper'>
                        <div className='single-cat-content-title'>Weight</div>
                        <div className='single-cat-content-weight'>{catBreed.weight.imperial} lbs</div>
                        <div className='single-cat-content'>{catBreed.weight.metric} kg</div>
                    </div>
                    <div className='lifespan-wrapper'>
                        <div className='single-cat-content-title'>Lifespan</div>
                        <div className='single-cat-content'>{catBreed.life_span} years</div>
                    </div>
                    <div className='country-wrapper'>
                        <div className='single-cat-content-title'>Country of Origin</div>
                        <div className='single-cat-content'>{catBreed.origin}</div>
                    </div>
                </div>

                <div className='traites-title-wrapper'>
                    <div className='single-cat-content-title'>Traits</div>
                    <div className='single-cat-trait-content'>Ranges are 1 (least) - 5 (most)</div>
                </div>
                <div className='all-traites-wrapper'>
                    <div className='traites-wrapper'>
                        <div className='trait-wrapper'>
                            <div className='trait-content-title'>Adaptability</div>
                            <div className='trait-content'>{catBreed.adaptability}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='trait-content-title'>Affection level</div>
                            <div className='trait-content'>{catBreed.affection_level}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='trait-content-title'>Child friendly</div>
                            <div className='trait-content'>{catBreed.child_friendly}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='trait-content-title'>Dog friendly</div>
                            <div className='trait-content'>{catBreed.dog_friendly}</div>
                        </div>
                    </div>
                    <div className='traites-wrapper'>
                        <div className='trait-wrapper'>
                            <div className='trait-content-title'>Energy level</div>
                            <div className='trait-content'>{catBreed.energy_level}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='trait-content-title'>Grooming</div>
                            <div className='trait-content'>{catBreed.grooming}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='trait-content-title'>Health issues</div>
                            <div className='trait-content'>{catBreed.health_issues}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='trait-content-title'>Intelligence</div>
                            <div className='trait-content'>{catBreed.intelligence}</div>
                        </div>
                    </div>
                    <div className='traites-wrapper'>
                        <div className='trait-wrapper'>
                            <div className='trait-content-title'>Shedding level</div>
                            <div className='trait-content'>{catBreed.shedding_level}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='trait-content-title'>Social needs</div>
                            <div className='trait-content'>{catBreed.social_needs}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='trait-content-title'>Stranger friendly</div>
                            <div className='trait-content'>{catBreed.stranger_friendly}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='trait-content-title'>Vocalisation</div>
                            <div className='trait-content'>{catBreed.vocalisation}</div>
                        </div>
                    </div>
                </div>

                <div className='traites-title-wrapper'>
                    <div className='other-traits-content-title'>Other Traits</div>
                    <div className='single-cat-trait-content'>Ranges: has the trait (yes). Does not have the trait (no).</div>
                </div>
                <div className='all-traites-wrapper'>
                    <div className='traites-wrapper'>
                        <div className='trait-wrapper'>
                            <div className='trait-content-title'>Experimental</div>
                            <div className='trait-content'>{convertTrait(catBreed.experimental)}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='trait-content-title'>Hairless</div>
                            <div className='trait-content'>{convertTrait(catBreed.hairless)}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='trait-content-title'>Natural</div>
                            <div className='trait-content'>{convertTrait(catBreed.natural)}</div>
                        </div>
                    </div>
                    <div className='traites-wrapper'>
                        <div className='trait-wrapper'>
                            <div className='trait-content-title'>Rare</div>
                            <div className='trait-content'>{convertTrait(catBreed.rare)}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='trait-content-title'>Rex</div>
                            <div className='trait-content'>{convertTrait(catBreed.rex)}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='trait-content-title'>Suppressed tail</div>
                            <div className='trait-content'>{convertTrait(catBreed.suppressed_tail)}</div>
                        </div>
                    </div>
                    <div className='traites-wrapper'>
                        <div className='trait-wrapper'>
                            <div className='trait-content-title'>Short legs</div>
                            <div className='trait-content'>{convertTrait(catBreed.short_legs)}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='trait-content-title'>Hypoallergenic</div>
                            <div className='trait-content'>{convertTrait(catBreed.hypoallergenic)}</div>
                        </div>
                    </div>
                </div>

                <div className='other-traits-content-title '>More Information</div>
                <div className='traites-wrapper'>
                    <a href={catBreed.cfa_url} target="_blank" rel="noopener noreferrer" className='url-links'>CFA</a>
                    <a href={catBreed.vetstreet_url} target="_blank" rel="noopener noreferrer" className='url-links'>Vetstreet</a>
                    <a href={catBreed.vcahospitals_url} target="_blank" rel="noopener noreferrer" className='url-links'>VCA Hospitals</a>
                    <a href={catBreed.wikipedia_url} target="_blank" rel="noopener noreferrer" className='url-links bottom'>Wikipedia</a>
                </div>

            </div>
        </section>
    )
}

export default SingleCatBreed;

SingleCatBreed.propTypes = {
    allCatBreeds: [
        {
            weight: {
                imperial: PropTypes.string,
                metric: PropTypes.string,
            },
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            cfa_url: PropTypes.string,
            vetstreet_url: PropTypes.string,
            vcahospitals_url: PropTypes.string,
            temperament: PropTypes.string,
            origin: PropTypes.string,
            description: PropTypes.string,
            life_span: PropTypes.string,
            adaptability: PropTypes.number,
            affection_level: PropTypes.number,
            child_friendly: PropTypes.number,
            dog_friendly: PropTypes.number,
            energy_level:PropTypes.number ,
            grooming: PropTypes.number,
            health_issues: PropTypes.number,
            intelligence: PropTypes.number,
            shedding_level: PropTypes.number,
            social_needs: PropTypes.number,
            stranger_friendly: PropTypes.number,
            vocalisation: PropTypes.number,
            experimental: PropTypes.number,
            hairless: PropTypes.number,
            natural: PropTypes.number,
            rare: PropTypes.number,
            rex: PropTypes.number,
            suppressed_tail: PropTypes.number,
            short_legs: PropTypes.number,
            wikipedia_url: PropTypes.string,
            hypoallergenic: PropTypes.number,
            image: {
                url: PropTypes.string,
            }
        }
    ]
}