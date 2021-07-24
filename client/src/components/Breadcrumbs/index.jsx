import PropTypes from 'prop-types';
import s from './styles.module.scss';

const Breadcrumbs = ({ breadcrumbs }) => {
    return (
        <ul className={s.breadcrumbs} data-testid='breadcrumbs'>
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
