import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './styles.scss';

const Logo = () => {
    return (
        <div className='logo-container'>
            <Link to='/' aria-label='Volver al inicio' className='logo'>
                <img src={logo} alt='Logo Mercado Libre' />
            </Link>
        </div>
    );
};

export default Logo;
