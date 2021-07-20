import { Link } from 'react-router-dom';
import './styles.scss';
import freeShippingIcon from '../../assets/shipping.png';

const ProductCard = ({ product }) => {
    const { picture, title, price, free_shipping, id } = product;
    return (
        <article className='product-card'>
            <div className='img-container'>
                <img src={picture} alt={title} />
            </div>

            <div className='product-info-container'>
                <div className='product-info'>
                    <p className='product__price'>${price.amount.toLocaleString('es-AR')}</p>
                    {free_shipping && (
                        <p className='product__shipping'>
                            <img src={freeShippingIcon} alt='Envío gratis' />
                        </p>
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
