import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import searchIcon from '../../static/assets/search.png';
import s from './styles.module.scss';

const Searchbar = () => {
    const [query, setQuery] = useState('');
    const history = useHistory();

    const handleChange = (ev) => {
        setQuery(ev.target.value);
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (query) {
            history.push(`/items?search=${query}`);
        }
    };

    return (
        <form className={s.searchForm} onSubmit={handleSubmit} data-testid='search-form'>
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
