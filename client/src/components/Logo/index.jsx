import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './styles.scss';

const Logo = () => {
    return (
        <Link to='/' aria-label='Volver al inicio' className='logo'>
            <img src={logo} alt='Logo Mercado Libre' />
        </Link>
    );
};

export default Logo;
