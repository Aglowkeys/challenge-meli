import { screen, render, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import PageNotFound from '.';

const MockPageNotFound = () => (
    <BrowserRouter>
        <HelmetProvider>
            <PageNotFound />
        </HelmetProvider>
    </BrowserRouter>
);

describe('Página <PageNotFound />', () => {
    beforeEach(() => {
        render(<MockPageNotFound />);
    });

    it('Se renderiza apropiadamente', () => {
        const main = screen.getByRole('main');
        expect(main).toBeInTheDocument();
    });

    it('Contiene un título con un mensaje de error', () => {
        const title = screen.getByText('La página a la que intentas ingresar no existe', {
            exact: false,
        });
        expect(title).toBeInTheDocument();
    });

    it('Contiene un enlace para volver al inicio', () => {
        const link = screen.getByRole('link', { name: 'vuelve al inicio' });
        expect(link).toBeInTheDocument();
    });

    it('Cambia el título del <head>', async () => {
        await waitFor(() => {
            expect(document.title).toEqual('Página no encontrada | Mercado Libre');
        });
    });
});
