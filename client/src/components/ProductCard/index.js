import './styles.scss';
import freeShippingIcon from '../../assets/shipping.png';

const ProductCard = ({ product }) => {
    return (
        <article className='product-card'>
            <div className='img-container'>
                <img src={product.picture} alt={product.title} />
            </div>

            <div className='product-info'>
                <p className='product__price'>{product.price.amount}</p>
                {product.free_shipping && (
                    <p className='product__shipping'>
                        <img src={freeShippingIcon} alt='Envío gratis' />
                    </p>
                )}
                <h2 className='product__title'>{product.title}</h2>
            </div>

            <p className='product__location'>Córdoba</p>
        </article>
    );
};

export default ProductCard;
