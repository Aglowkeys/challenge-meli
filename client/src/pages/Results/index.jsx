import { useEffect, useState, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../../axios';
import Breadcrumbs from '../../components/Breadcrumbs';
import ProductsContainer from '../../components/ProductsContainer';

const initialState = 'idle';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return 'loading';

        case 'SET_LOADED':
            return 'loaded';

        case 'SET_ERROR':
            return 'error';

        default:
            return state;
    }
};

const Results = () => {
    const [products, setProducts] = useState([]);
    const [breadcrumbs, setBreadcrumbs] = useState([]);
    const [status, dispatch] = useReducer(reducer, initialState);

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

    if (status === 'loading') {
        return <main>Cargando...</main>;
    }

    if (status === 'error') {
        return <main>Error...</main>;
    }

    return (
        <>
            {breadcrumbs.length > 0 && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            {products.length > 0 && <ProductsContainer arrayProd={products} />}
        </>
    );
};

export default Results;
