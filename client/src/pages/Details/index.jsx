import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail';
import Container from '../../components/Container';
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
        <Container>
            <Breadcrumbs breadcrumbs={categories} />
            <main>
                <ProductDetail product={product} />
            </main>
        </Container>
    );
};

export default Details;
