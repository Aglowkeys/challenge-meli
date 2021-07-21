import SinglePageLayout from '../SinglePageLayout';
import ErrorImage from './ErrorImage';

const Error = () => {
    return (
        <SinglePageLayout>
            <ErrorImage />
            <h2>Ocurrió un error</h2>
            <p>Por favor vuelve a intentarlo.</p>
        </SinglePageLayout>
    );
};

export default Error;
