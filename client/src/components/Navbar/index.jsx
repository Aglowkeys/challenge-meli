import Searchbar from '../Searchbar';
import Container from '../Container';
import './styles.scss';

const Navbar = () => (
    <nav className='navbar'>
        <Container center>
            <Searchbar />
        </Container>
    </nav>
);

// const a = new URLSearchParams(useLocation().search);
// console.log(a.get('search'));
// history push a '/items?search=query'

export default Navbar;
