import PropTypes from 'prop-types';
import SinglePageLayout from '../SinglePageLayout';
import Spinner from '../Spinner';

const Loading = ({ text }) => {
    return (
        <SinglePageLayout>
            <Spinner text={text} />
        </SinglePageLayout>
    );
};

export default Loading;

Loading.propTypes = {
    text: PropTypes.string,
};
