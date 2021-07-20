import Searchbar from '../Searchbar';
import Container from '../Container';
import Logo from '../Logo';
import './styles.scss';

const Navbar = () => (
    <nav className='navbar'>
        <Container>
            <>
                <Logo />
                <Searchbar />
            </>
        </Container>
    </nav>
);

export default Navbar;
