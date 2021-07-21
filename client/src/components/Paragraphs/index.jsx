import PropTypes from 'prop-types';
import './styles.scss';

const Paragraphs = ({ string }) => {
    return string.split('\n').map(
        (el, i) =>
            !!el && (
                <p
                    key={i}
                    className={
                        !el.trim().endsWith('.') ? 'paragraph subtitle-paragraph' : 'paragraph'
                    }
                >
                    {el}
                </p>
            )
    );
};

export default Paragraphs;

Paragraphs.propTypes = {
    string: PropTypes.string.isRequired,
};
