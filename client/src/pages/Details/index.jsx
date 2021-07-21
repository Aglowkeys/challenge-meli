import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail';
import Breadcrumbs from '../../components/Breadcrumbs';
import axios from '../../axios';

const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`/api/items/${id}`).then(({ data }) => {
            setProduct(data.item);
            setCategories(data.categories);
        });
    }, [id]);

    return (
        <>
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
