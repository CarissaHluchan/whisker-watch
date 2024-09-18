import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <nav>
            <Link to='/' className='nav-item'>Rare Cat Breeds</Link>
            <Link to='allCatBreeds' className='nav-item'>All Cat Breeds</Link>
            <Link to='/favoriteCatbreeds' className='nav-item'>Favorite Cat breeds</Link>
        </nav>
    )
}

export default Nav;