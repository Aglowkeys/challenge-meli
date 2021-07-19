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
