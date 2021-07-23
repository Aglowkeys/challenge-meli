import { screen, render } from '@testing-library/react';
import ProductDetail from '.';
import { mockProduct } from './__mocks__';

describe('Componente <ProductDetail />', () => {
    beforeEach(() => {
        render(<ProductDetail product={mockProduct} />);
    });

    it('Se renderiza correctamente', () => {
        const headings = screen.getAllByRole('heading');
        const img = screen.getByRole('img');
        const finalArray = [...headings, img];
        expect(finalArray.length).toBe(3);
    });

    it('Muestra la imagen del producto', () => {
        const img = screen.getByAltText('Notebook Lenovo Ideapad', { exact: false });
        expect(img).toBeInTheDocument();
    });

    it('Muestra el título del producto', () => {
        const title = screen.getByText('Notebook Lenovo Ideapad 14iil05', { exact: false });
        expect(title).toBeInTheDocument();
    });

    it('Muestra el precio formateado del producto', () => {
        const price = screen.getByText('$91.899');
        expect(price).toBeInTheDocument();
    });

    it('Muestra la condición del producto', () => {
        const condition = screen.getByText('Nuevo -', { exact: false });
        expect(condition).toBeInTheDocument();
    });

    it('Muestra la cantidad de ventas que tuvo el producto', () => {
        const sales = screen.getByText('250 vendidos', { exact: false });
        expect(sales).toBeInTheDocument();
    });

    it('Renderiza el botón para comprar', () => {
        const button = screen.getByRole('button', { name: 'Comprar' });
        expect(button).toBeInTheDocument();
    });

    it('Muestra la descripción del producto', () => {
        const description = screen.getByText('La notebook Lenovo IdeaPad 3 fue pensada', {
            exact: false,
        });
        expect(description).toBeInTheDocument();
    });
});
