import Searchbar from '../Searchbar';
import Container from '../Container';
import './styles.scss';

const Navbar = () => (
    <nav className='navbar'>
        <Container>
            <Searchbar />
        </Container>
    </nav>
);

export default Navbar;
