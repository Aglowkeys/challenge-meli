import { Link } from 'react-router-dom';
import SinglePageLayout from '../../components/SinglePageLayout';
import Head from '../../components/Head';
import NotFoundImage from './NotFoundImage';

const PageNotFound = () => (
    <>
        <Head title='Página no encontrada | Mercado Libre' />
        <SinglePageLayout>
            <NotFoundImage />
            <h2>La página a la que intentas ingresar no existe</h2>
            <p>
                Revisa posibles errores de tipeo o <Link to='/'>vuelve al inicio</Link>.
            </p>
        </SinglePageLayout>
    </>
);

export default PageNotFound;
