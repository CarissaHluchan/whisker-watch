import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav({ setIsNavOpen}) {

    return (
        <nav onMouseEnter={() => setIsNavOpen(true)} onMouseLeave={() => setIsNavOpen(false)}>
            <Link to='/' className='nav-item'>Rare Cat Breeds</Link>
            <Link to='allCatBreeds' className='nav-item'>All Cat Breeds</Link>
            <Link to='/favoriteCatbreeds' className='nav-item'>Favorite Cat Breeds</Link>
        </nav>
    )
}

Nav.propTypes = {
    setIsNavOpen: PropTypes.func.isRequired
};

export default Nav;
