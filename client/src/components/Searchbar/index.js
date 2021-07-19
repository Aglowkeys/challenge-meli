import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';
import searchIcon from '../../assets/search.png';

const Searchbar = () => {
    const [query, setQuery] = useState('');
    const history = useHistory();
    console.log({ query });

    const handleChange = (ev) => {
        setQuery(ev.target.value);
    };
    const handleSubmit = (ev) => {
        ev.preventDefault();
        history.push(`/items?search=${query}`);
    };
    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <label htmlFor='search-input'>Buscar un producto</label>
            <input
                type='text'
                id='search-input'
                placeholder='Nunca dejes de buscar'
                value={query}
                onChange={handleChange}
            />
            <button aria-label='Buscar'>
                <img src={searchIcon} alt='Buscar' />
            </button>
        </form>
    );
};

export default Searchbar;
