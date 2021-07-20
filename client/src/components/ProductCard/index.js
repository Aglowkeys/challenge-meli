import { Link } from 'react-router-dom';
import './styles.scss';
import freeShippingIcon from '../../assets/shipping.png';

const ProductCard = ({ product }) => {
    return (
        <article className='product-card'>
            <div className='img-container'>
                <img src={product.picture} alt={product.title} />
            </div>

            <div className='product-info-container'>
                <div className='product-info'>
                    <p className='product__price'>
                        ${product.price.amount.toLocaleString('es-AR')}
                    </p>
                    {product.free_shipping && (
                        <p className='product__shipping'>
                            <img src={freeShippingIcon} alt='Envío gratis' />
                        </p>
                    )}
                    <h2 className='product__title'>
                        <Link to=''>
                            <span aria-hidden='true'></span>
                            {product.title}
                        </Link>
                    </h2>
                </div>

                <p className='product__address'>{product.address}</p>
            </div>
        </article>
    );
};

export default ProductCard;
