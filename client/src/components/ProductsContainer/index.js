import ProductCard from '../ProductCard';

const ProductsContainer = ({ arrayProd }) => {
    return (
        <section>
            {arrayProd.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
            ))}
        </section>
    );
};

export default ProductsContainer;
