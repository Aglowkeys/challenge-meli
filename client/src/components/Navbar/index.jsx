import Searchbar from '../Searchbar';
import Container from '../Container';
import Logo from '../Logo';
import s from './styles.module.scss';

const Navbar = () => (
    <nav className={s.navbar}>
        <Container>
            <Logo />
            <Searchbar />
        </Container>
    </nav>
);

export default Navbar;
