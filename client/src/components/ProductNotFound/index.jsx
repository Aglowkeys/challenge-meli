import { Link } from 'react-router-dom';
import SinglePageLayout from '../SinglePageLayout';
import ProductNotFoundImage from './ProductNotFoundImage';

const ProductNotFound = () => {
    return (
        <SinglePageLayout>
            <ProductNotFoundImage />
            <h2>No se encontraron productos</h2>
            <p>
                Revisa la ortografía de la palabra, intenta buscar términos más genéricos o{' '}
                <Link to='/'>vuelve al inicio</Link>.
            </p>
        </SinglePageLayout>
    );
};

export default ProductNotFound;
