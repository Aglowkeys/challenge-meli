import { screen, render } from '@testing-library/react';
import Spinner from '.';

describe('Componente <Spinner />', () => {
    it('Se renderiza correctamente', () => {
        render(<Spinner text='Cargando...' />);
        const text = screen.getByText('Cargando...');
        expect(text).toBeInTheDocument;
    });

    it('Funciona aun sin pasarle texto', () => {
        render(<Spinner />);
        const spinner = screen.getByTestId('spinner');
        expect(spinner).toBeInTheDocument;
    });
});
