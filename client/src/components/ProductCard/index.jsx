import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
import freeShippingIcon from '../../static/assets/shipping.png';
import defaultImage from '../../static/assets/default.png';

const ProductCard = ({ product }) => {
    const { picture, title, price, free_shipping, id } = product;
    return (
        <article className='product-card'>
            <div className='img-container'>
                <img src={picture || defaultImage} alt={title} />
            </div>

            <div className='product-info-container'>
                <div className='product-info'>
                    <p className='product__price'>${price.amount.toLocaleString('es-AR')}</p>
                    {free_shipping && (
                        <span className='product__shipping'>
                            <img src={freeShippingIcon} alt='Envío gratis' />
                        </span>
                    )}
                    <h2 className='product__title'>
                        <Link to={`/items/${id}`}>
                            <span aria-hidden='true'></span>
                            {title}
                        </Link>
                    </h2>
                </div>

                <p className='product__address'>{product.address}</p>
            </div>
        </article>
    );
};

export default ProductCard;

ProductCard.propTypes = {
    product: PropTypes.shape({
        picture: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.shape({
            currency: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            decimals: PropTypes.number.isRequired,
        }),
        free_shipping: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
};
