import { Link } from 'react-router-dom';
import logo from '../../static/assets/logo.png';
import s from './styles.module.scss';

const Logo = () => {
    return (
        <div className={s.logoContainer}>
            <Link to='/' aria-label='Volver al inicio' className={s.logo}>
                <img src={logo} alt='Logo Mercado Libre' />
            </Link>
        </div>
    );
};

export default Logo;
