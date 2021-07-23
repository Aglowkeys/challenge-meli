import { screen, render, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import Home from '.';

const MockHome = () => (
    <HelmetProvider>
        <Home />
    </HelmetProvider>
);

describe('Página <Home />', () => {
    beforeEach(() => {
        render(<MockHome />);
    });

    it('Se renderiza apropiadamente', () => {
        const main = screen.getByRole('main');
        expect(main).toBeInTheDocument();
    });

    it('Contiene un título con un mensaje de bienvenida', () => {
        const title = screen.getByText('Bienvenido a la página', { exact: false });
        expect(title).toBeInTheDocument();
    });

    it('Cambia el título del <head>', async () => {
        await waitFor(() => {
            expect(document.title).toEqual('Inicio | Mercado Libre');
        });
    });
});
