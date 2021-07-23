import { screen, render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import Results from '.';

const MockResults = () => {
    return (
        <BrowserRouter>
            <HelmetProvider>
                <Results />
            </HelmetProvider>
        </BrowserRouter>
    );
};

describe('Página <Results />', () => {
    describe('Si no contiene nada en la URL', () => {
        beforeEach(() => {
            render(<MockResults />);
        });

        it('Renderiza un spinner cuando no terminó de cargar', () => {
            const spinner = screen.getByText('Buscando...');
            expect(spinner).toBeInTheDocument();
        });

        it('Muestra un error si no se le pasa un término de búsqueda', async () => {
            const errormsg = await screen.findByRole('heading', { name: 'Ocurrió un error' });
            expect(errormsg).toBeInTheDocument();
        });
    });
});
