import './styles.scss';
import searchIcon from '../../assets/search.png';

const Searchbar = () => {
    return (
        <form className='search-form'>
            <label htmlFor='search-input'>Buscar un producto</label>
            <input type='text' id='search-input' placeholder='Nunca dejes de buscar' />
            <button aria-label='Buscar'>
                <img src={searchIcon} alt='Buscar' />
            </button>
        </form>
    );
};

export default Searchbar;
