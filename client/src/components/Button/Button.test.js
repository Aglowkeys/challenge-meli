import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '.';

describe('Componente <Button />', () => {
    it('Se renderiza correctamente', () => {
        render(<Button text='Soy un botón' />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('Muestra el texto pasado por props', () => {
        render(<Button text='Soy un botón' />);
        const button = screen.getByText('Soy un botón');
        expect(button).toBeInTheDocument();
    });

    it('Permite pasarle distintas props y agregarlas al botón', () => {
        const mockFn = jest.fn();
        render(<Button text='Soy un botón' onClick={mockFn} />);
        const button = screen.getByText('Soy un botón');
        userEvent.click(button);
        expect(mockFn).toHaveBeenCalled();
    });
});
