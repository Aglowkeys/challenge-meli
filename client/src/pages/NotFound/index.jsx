import NotFoundImage from '../../components/NotFoundImage';
import './styles.scss';

const NotFound = () => (
    <main className='flex'>
        <div className='flex-container'>
            <NotFoundImage />
            <h2>No se encontró lo que buscabas...</h2>
            <p></p>
        </div>
    </main>
);

export default NotFound;
