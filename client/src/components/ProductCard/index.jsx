import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import freeShippingIcon from '../../static/assets/shipping.png';
import defaultImage from '../../static/assets/default.png';
import s from './styles.module.scss';

const ProductCard = ({ product }) => {
    const { picture, title, price, free_shipping, id } = product;
    return (
        <article className={s.productCard}>
            <div className={s.imgContainer}>
                <img src={picture || defaultImage} alt={title} />
            </div>

            <div className={s.productInfo__container}>
                <div className={s.productInfo}>
                    <p className={s.product__price}>${price.amount.toLocaleString('es-AR')}</p>
                    {free_shipping && (
                        <span className={s.product__shipping}>
                            <img src={freeShippingIcon} alt='Envío gratis' />
                        </span>
                    )}
                    <h2 className={s.product__title}>
                        <Link to={`/items/${id}`}>
                            <span aria-hidden='true'></span>
                            {title}
                        </Link>
                    </h2>
                </div>

                <p className={s.product__address}>{product.address}</p>
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
