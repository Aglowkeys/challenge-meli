import { render, screen } from '@testing-library/react';
import Breadcrumbs from '.';

describe('Componente <Breadcrumbs />', () => {
    it('Renderiza las breadcrumbs', () => {
        render(<Breadcrumbs breadcrumbs={['Item 1', 'Item 2', 'Item 3']} />);
        const breadCrumbList = screen.getByRole('list');
        expect(breadCrumbList).toBeInTheDocument();
    });

    it('Renderiza todos los elementos del array pasado por props', () => {
        render(<Breadcrumbs breadcrumbs={['Item 1', 'Item 2', 'Item 3']} />);
        const listOfLinks = screen.getAllByRole('listitem');
        expect(listOfLinks.length).toBe(3);
    });

    it('Muestra correctamente el texto', () => {
        render(<Breadcrumbs breadcrumbs={['Texto 1', 'Enlace 2', 'Link 3']} />);
        const link = screen.getByText('Enlace 2');
        expect(link).toBeInTheDocument();
    });

    it('Valida que se le pase un array de strings', () => {
        expect(() => {
            render(<Breadcrumbs breadcrumbs={['Esto es válido', 2, { name: 'Emi' }]} />);
        }).toThrow();
    });
});
