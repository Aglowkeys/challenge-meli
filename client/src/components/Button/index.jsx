import PropTypes from 'prop-types';
import s from './styles.module.scss';

const Button = ({ text, ...rest }) => {
    return (
        <button {...rest} className={s.button}>
            {text}
        </button>
    );
};

export default Button;

Button.propTypes = {
    text: PropTypes.string.isRequired,
};
