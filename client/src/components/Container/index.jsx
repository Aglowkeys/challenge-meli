import PropTypes from 'prop-types';
import s from './styles.module.scss';

const Container = ({ children }) => {
    return <div className={s.container}>{children}</div>;
};

export default Container;

Container.propTypes = {
    children: PropTypes.node,
};
