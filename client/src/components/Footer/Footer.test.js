import { screen, render } from '@testing-library/react';
import Footer from '.';

describe('Componente <Footer />', () => {
    it('Renderiza un elemento footer', () => {
        render(<Footer />);
        const footer = screen.getByRole('contentinfo');
        expect(footer).toBeInTheDocument();
    });

    it('Contiene un enlace para ir a mi github :)', () => {
        render(<Footer />);
        const link = screen.getByRole('link', { name: 'Emiliano Alfonso' });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', 'http://github.com/Aglowkeys');
    });
});
