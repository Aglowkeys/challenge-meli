import { screen, render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Details from '.';

const MockDetails = ({ url }) => {
    const history = createMemoryHistory();
    history.push(url);
    return (
        <Router history={history}>
            <HelmetProvider>
                <Details />
            </HelmetProvider>
        </Router>
    );
};

describe('Página <Details />', () => {
    it('Renderiza un spinner cuando no terminó de cargar', () => {
        render(<MockDetails url='items/MLA919608162' />);
        const spinner = screen.getByText('Cargando datos del producto...');
        expect(spinner).toBeInTheDocument();
    });
});
