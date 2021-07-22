import PropTypes from 'prop-types';
import './styles.scss';

const Paragraphs = ({ string }) => {
    const arr = string
        .split('\n')
        .filter((el) => !!el)
        .map((el, i) => (
            <p key={i} className='paragraph' data-testid={`test-${i}`}>
                {el}
            </p>
        ));

    return arr;
};

export default Paragraphs;

Paragraphs.propTypes = {
    string: PropTypes.string.isRequired,
};
