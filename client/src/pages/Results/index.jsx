import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../../axios';
import ProductCard from '../../components/ProductCard';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';

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
                {products.length && products.map((prod) => <ProductCard product={prod} />)}
            </Container>
        </main>
    );
};

// Cuando carga, tomar la URL de la query y hacer la petición al back
export default Results;

// const a = new URLSearchParams(useLocation().search);
// console.log(a.get('search'));
// history push a '/items?search=query'
