import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../../axios';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import ProductsContainer from '../../components/ProductsContainer';

const Results = () => {
    const [products, setProducts] = useState([]);
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const query = params.get('search');

    useEffect(() => {
        if (query) {
            axios
                .get(`/api/items?q=${query}`)
                .then(({ data }) => {
                    setProducts(data.items);
                    setBreadcrumbs(data.categories);
                })
                .catch((err) => console.error(err));
        }
    }, [query]);

    return (
        <main>
            <Container>
                {breadcrumbs.length && <Breadcrumbs breadcrumbs={breadcrumbs} />}
                {products.length && <ProductsContainer arrayProd={products} />}
            </Container>
        </main>
    );
};

export default Results;
