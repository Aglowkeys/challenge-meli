import { screen, render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const MockApp = () => (
    <BrowserRouter>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </BrowserRouter>
);

describe('Componente <App />', () => {
    beforeEach(() => {
        render(<MockApp />);
    });

    it('Renderiza la navbar', () => {
        const nav = screen.getByRole('navigation');
        const input = screen.getByPlaceholderText('Nunca dejes de buscar');
        expect(nav).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });

    it('Renderiza el Home', () => {
        const title = screen.getByRole('heading', {
            name: '¡Bienvenido a la página de Mercado Libre!',
        });
        expect(title).toBeInTheDocument();
    });

    it('Renderiza el footer', () => {
        const footer = screen.getByText('Realizado por', { exact: false });
        expect(footer).toBeInTheDocument();
    });
});
