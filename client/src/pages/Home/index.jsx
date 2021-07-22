import SinglePageLayout from '../../components/SinglePageLayout';
import Head from '../../components/Head';
import ShoppingImage from './ShoppingImage';

const Home = () => (
    <>
        <Head title='Inicio | Mercado Libre' />
        <SinglePageLayout>
            <ShoppingImage />
            <h2>¡Bienvenido a la página de Mercado Libre!</h2>
            <p>Encuentra productos utilizando el buscador de arriba.</p>
        </SinglePageLayout>
    </>
);

export default Home;
