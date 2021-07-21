import './styles.scss';
import PropTypes from 'prop-types';

const Button = ({ text, ...rest }) => {
    return (
        <button {...rest} className='button'>
            {text}
        </button>
    );
};

export default Button;

Button.propTypes = {
    text: PropTypes.string.isRequired,
};
