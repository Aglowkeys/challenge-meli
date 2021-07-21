import { Link } from 'react-router-dom';
import NotFoundImage from './NotFoundImage';
import './styles.scss';

const NotFound = () => (
    <main className='flex'>
        <div className='flex-container'>
            <NotFoundImage />
            <h2>No se encontró lo que buscabas...</h2>
            <p>
                Prueba con otro término o <Link to='/'>vuelve al inicio</Link>.
            </p>
        </div>
    </main>
);

export default NotFound;
