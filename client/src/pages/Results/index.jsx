import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../../axios';

const Results = () => {
    const [products, setProducts] = useState([]);
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const query = params.get('search');

    useEffect(() => {
        axios
            .get(`/api/items?q=${query}`)
            .then((info) => {
                setProducts(info.data);
            })
            .catch((err) => console.error(err));
    }, []);

    return <div>RESULTS</div>;
};

// Cuando carga, tomar la URL de la query y hacer la petición al back
export default Results;

// const a = new URLSearchParams(useLocation().search);
// console.log(a.get('search'));
// history push a '/items?search=query'
