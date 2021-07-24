import PropTypes from 'prop-types';
import s from './style.module.scss';

const SinglePageLayout = ({ children }) => {
    return (
        <main className={s.flex}>
            <div className={s.flexContainer}>{children}</div>
        </main>
    );
};

export default SinglePageLayout;

SinglePageLayout.propTypes = {
    children: PropTypes.node,
};
