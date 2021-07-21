import PropTypes from 'prop-types';
import './style.scss';

const SinglePageLayout = ({ children }) => {
    return (
        <main className='flex'>
            <div className='flex-container-page'>{children}</div>
        </main>
    );
};

export default SinglePageLayout;

SinglePageLayout.propTypes = {
    children: PropTypes.node,
};
