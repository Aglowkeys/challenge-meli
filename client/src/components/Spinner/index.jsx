import PropTypes from 'prop-types';
import './styles.scss';

const Spinner = ({ text = '' }) => {
    return (
        <>
            <div className='spinner'></div>
            {text && <h2 className='spinner-text'>{text}</h2>}
        </>
    );
};

export default Spinner;

Spinner.propTypes = {
    text: PropTypes.string,
};
