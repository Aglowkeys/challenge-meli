import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '.';

describe('Componente <Searchbar />', () => {
    beforeEach(() => {
        render(<SearchBar />);
    });

    it('Se renderiza correctamente', () => {
        const form = screen.getByTestId('search-form');
        expect(form).toBeInTheDocument();
    });

    it('Muestra un placeholder', () => {
        const input = screen.getByPlaceholderText('Nunca dejes de buscar');
        expect(input).toBeInTheDocument();
    });

    it('Contiene un label', () => {
        const label = screen.getByText('Buscar un producto');
        expect(label).toBeInTheDocument();
    });

    it('Contiene un botón', () => {
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('El botón contiene una imagen', () => {
        const img = screen.getByAltText('Buscar');
        expect(img).toBeInTheDocument();
    });

    it('Se puede tipear en el input', () => {
        const input = screen.getByPlaceholderText('Nunca dejes de buscar');
        userEvent.type(input, 'iPhone 9s 64gb ram dorado');
        expect(input).toHaveValue('iPhone 9s 64gb ram dorado');
    });
});
