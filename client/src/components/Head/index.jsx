import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const Head = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <link rel='icon' href='../../assets/logo.png' type='image/x-icon' />
            <meta charset='utf-8' />
            <meta
                name='description'
                content='Desafío técnico de Front End enviado por Mercado Libre.'
            />
            <meta name='keywords' content='Mercado Libre, React, Front-end, JavaScript' />
            <meta name='author' content='Emiliano Alfonso' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='theme-color' content='#ffe600' />

            {/* OG Tags */}
            <meta property='og:title' content={title} />
            <meta property='og:locale' content='es_AR' />
            <meta property='og:url' content='https://mercadolibre-rho.vercel.app/' />
            <meta property='og:type' content='website' />
            <meta
                property='og:description'
                content='Desafío técnico de Front End enviado por Mercado Libre.'
            />
            <meta property='og:image' content='https://i.imgur.com/62vm6XB.png' />

            {/* TAGS DE TWITTER */}
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:url' content='https://mercadolibre-rho.vercel.app/' />
            <meta name='twitter:site' content='@mercadolibre' />
            <meta
                name='twitter:description'
                content='Desafío técnico de Front End enviado por Mercado Libre.'
            />
            <meta name='twitter:image' content='https://i.imgur.com/62vm6XB.png' />
            <meta name='twitter:image:alt' content='Pantalla de inicio de la aplicación' />
        </Helmet>
    );
};

export default Head;

Head.propTypes = {
    title: PropTypes.string.isRequired,
};
