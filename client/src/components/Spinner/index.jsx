import PropTypes from 'prop-types';
import s from './styles.module.scss';

const Spinner = ({ text = '' }) => {
    return (
        <>
            <div className={s.spinner} data-testid='spinner'></div>
            {text && <h2 className={s.spinnerText}>{text}</h2>}
        </>
    );
};

export default Spinner;

Spinner.propTypes = {
    text: PropTypes.string,
};
