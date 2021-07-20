import Button from '../Button';
import './styles.scss';
import { formatDecimals } from '../../utils/functions';
import Paragraphs from '../Paragraphs';

const ProductDetail = ({ product }) => {
    const { condition, sold_quantity, title, price, description, picture } = product;
    console.log({ product });
    return (
        <section className='product-container'>
            <div className='flex-container'>
                <div className='product__image'>
                    <img src={picture} alt={title} />
                </div>
                <div className='product__info'>
                    <p className='product__condition'>
                        {condition} - {sold_quantity} vendidos
                    </p>
                    <h2 className='product__title'>{title}</h2>
                    <p className='product__price'>
                        ${price.amount.toLocaleString('es-AR')}
                        <span>{formatDecimals(price.decimals)}</span>
                    </p>
                    <Button text='Comprar' />
                </div>
            </div>

            <div className='product__description'>
                <h3>Descripción del producto</h3>
                <Paragraphs string={description} />
            </div>
        </section>
    );
};

export default ProductDetail;

/* 
	Estado (nuevo)
	Cuántos vendidos
*/
