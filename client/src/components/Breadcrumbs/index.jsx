import PropTypes from 'prop-types';
import './styles.scss';

const Breadcrumbs = ({ breadcrumbs }) => {
    return (
        <ul className='breadcrumbs'>
            {breadcrumbs.map((category) => (
                <li key={category}>
                    <a href='#0'>{category}</a>
                </li>
            ))}
        </ul>
    );
};

export default Breadcrumbs;

Breadcrumbs.propTypes = {
    breadcrumbs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
