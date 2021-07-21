import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';

const ProductsContainer = ({ arrayProd }) => {
    return (
        <main>
            {arrayProd.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
            ))}
        </main>
    );
};

export default ProductsContainer;

ProductsContainer.propTypes = {
    arrayProd: PropTypes.arrayOf(PropTypes.object).isRequired,
};
