import { useEffect, useState, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../../static/axios';

import { initialState, statusReducer } from '../../static/reducer';
import {
    SET_LOADING,
    SET_LOADED,
    SET_ERROR_500,
    SET_ERROR_404,
} from '../../static/reducer/constants';

import Breadcrumbs from '../../components/Breadcrumbs';
import ProductsContainer from '../../components/ProductsContainer';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import ProductNotFound from '../../components/ProductNotFound';
import Head from '../../components/Head';

const Results = () => {
    const [products, setProducts] = useState([]);
    const [breadcrumbs, setBreadcrumbs] = useState([]);
    const [status, dispatch] = useReducer(statusReducer, initialState);

    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const query = params.get('search');

    useEffect(() => {
        dispatch({ type: SET_LOADING });
        axios
            .get(`/api/items?q=${query}`)
            .then(({ data }) => {
                setProducts(data.items);
                setBreadcrumbs(data.categories);
                dispatch({ type: SET_LOADED });
            })
            .catch((err) => {
                if (err.message.endsWith('404')) {
                    dispatch({ type: SET_ERROR_404 });
                } else {
                    dispatch({ type: SET_ERROR_500 });
                }
            });
    }, [query]);

    if (status === 'loading') {
        return <Loading text='Buscando...' />;
    }

    if (status === 'error-404') {
        return <ProductNotFound />;
    }

    if (status === 'error') {
        return <Error />;
    }

    return (
        <>
            <Head title={`Resultados de ${query || 'tu búsqueda'} | Mercado Libre`} />
            {breadcrumbs.length > 0 && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            {products.length > 0 && <ProductsContainer arrayProd={products} />}
        </>
    );
};

export default Results;
