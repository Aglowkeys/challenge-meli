import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../../axios';
import Breadcrumbs from '../../components/Breadcrumbs';
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
        <>
            {breadcrumbs.length > 0 && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            {products.length > 0 && <ProductsContainer arrayProd={products} />}
        </>
    );
};

export default Results;
