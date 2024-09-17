import './SingleCatBreed.css';
import { useParams } from 'react-router-dom';

function SingleCatBreed({ allCatBreeds }) {

    const { id } = useParams();
    const catBreed = allCatBreeds.find(catBreed => catBreed.id === id);

    return (
        <section className='sinlge-cat-section'>
            {/* <div className='single-breed-button-wrapper'>
                <button>Back to rare breeds</button>
                <button>My Favorite Breeds</button>
            </div> */}
            <div className='single-cat-all-wrapper'>
                <button className='add-to-favorites-button'>Add Breed to Favorites</button>
                <h3 className='sc-breed-name'>{catBreed.name}</h3>

                <div className='single-cat-img-des-wrapper'>
                    <img className='sc-breed-image' src={catBreed.image.url} />
                    <div className='description-wrapper'>
                        <div className='sc-content-title'>Description</div>
                        <div className='sc-content'>{catBreed.description}</div>
                    </div>
                </div>


                <div className='termperament-wrapper'>
                    <div className='sc-content-title'>Temperament</div>
                    <div className='sc-content'>{catBreed.temperament}</div>
                </div>

                <div className='wrapper-weight-lifespan-country'>
                    <div className='weight-wrapper'>
                        <div className='sc-content-title'>Weight</div>
                        <div className='sc-content-weight'>{catBreed.weight.imperial} lbs</div>
                        <div className='sc-content'>{catBreed.weight.metric} kg</div>
                    </div>
                    <div className='lifespan-wrapper'>
                        <div className='sc-content-title'>lifespan</div>
                        <div className='sc-content'>{catBreed.life_span} years</div>
                    </div>
                    <div className='country-wrapper'>
                        <div className='sc-content-title'>Country of origin</div>
                        <div className='sc-content'>{catBreed.origin}</div>
                    </div>
                </div>

                <div className='rated-traites-title-wrapper'>
                    <div className='sc-content-title'>Traits</div>
                    <div className='sc-rated-trait-content'>Ranges are 1 (least) - 5 (most)</div>
                </div>
                <div className='all-rated-traites-wrapper'>
                    <div className='rated-traites-wrapper'>
                        <div className='trait-wrapper'>
                            <div className='rated-trait-content-title'>Adaptability</div>
                            <div className='rated-trait-content'>{catBreed.adaptability}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='rated-trait-content-title'>Affection level</div>
                            <div className='rated-trait-content'>{catBreed.affection_level}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='rated-trait-content-title'>Child friendly</div>
                            <div className='rated-trait-content'>{catBreed.child_friendly}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='rated-trait-content-title'>Dog friendly</div>
                            <div className='rated-trait-content'>{catBreed.dog_friendly}</div>
                        </div>
                    </div>
                    <div className='rated-traites-wrapper'>
                        <div className='trait-wrapper'>
                            <div className='rated-trait-content-title'>Energy level</div>
                            <div className='rated-trait-content'>{catBreed.energy_level}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='rated-trait-content-title'>Grooming</div>
                            <div className='rated-trait-content'>{catBreed.grooming}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='rated-trait-content-title'>Health issues</div>
                            <div className='rated-trait-content'>{catBreed.health_issues}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='rated-trait-content-title'>Intelligence</div>
                            <div className='rated-trait-content'>{catBreed.intelligence}</div>
                        </div>
                    </div>
                    <div className='rated-traites-wrapper'>
                        <div className='trait-wrapper'>
                            <div className='rated-trait-content-title'>Shedding level</div>
                            <div className='rated-trait-content'>{catBreed.shedding_level}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='rated-trait-content-title'>Social needs</div>
                            <div className='rated-trait-content'>{catBreed.social_needs}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='rated-trait-content-title'>Stranger friendly</div>
                            <div className='rated-trait-content'>{catBreed.stranger_friendly}</div>
                        </div>
                        <div className='trait-wrapper'>
                            <div className='rated-trait-content-title'>Vocalisation</div>
                            <div className='rated-trait-content'>{catBreed.vocalisation}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleCatBreed;