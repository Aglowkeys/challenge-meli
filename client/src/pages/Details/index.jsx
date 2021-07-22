import { useState, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../axios';

import { initialState, statusReducer } from '../../reducer';
import { SET_LOADING, SET_LOADED, SET_ERROR_500, SET_ERROR_404 } from '../../reducer/constants';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import ProductNotFound from '../../components/ProductNotFound';
import ProductDetail from '../../components/ProductDetail';
import Breadcrumbs from '../../components/Breadcrumbs';
import Head from '../../components/Head';

const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [categories, setCategories] = useState([]);
    const [status, dispatch] = useReducer(statusReducer, initialState);

    useEffect(() => {
        dispatch({ type: SET_LOADING });
        axios
            .get(`/api/items/${id}`)
            .then(({ data }) => {
                dispatch({ type: SET_LOADED });
                setProduct(data.item);
                setCategories(data.categories);
            })
            .catch((err) => {
                if (err.message.endsWith('404')) {
                    dispatch({ type: SET_ERROR_404 });
                } else {
                    dispatch({ type: SET_ERROR_500 });
                }
            });
    }, [id]);

    if (status === 'loading') {
        return <Loading text='Cargando datos del producto...' />;
    }

    if (status === 'error-404') {
        return <ProductNotFound />;
    }

    if (status === 'error') {
        return <Error />;
    }

    return (
        <>
            <Head title='Detalles del producto | Mercado Libre' />
            {categories.length > 0 && <Breadcrumbs breadcrumbs={categories} />}
            {product.id ? (
                <main>
                    <ProductDetail product={product} />
                </main>
            ) : null}
        </>
    );
};

export default Details;
