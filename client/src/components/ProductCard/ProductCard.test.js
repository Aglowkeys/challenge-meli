import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from '.';
import { mockProduct, mockProductWithoutFreeShipping } from './__mocks__';

const MockProductCard = ({ prod }) => {
    return (
        <BrowserRouter>
            <ProductCard product={prod} />
        </BrowserRouter>
    );
};

describe('Componente <ProductCard />', () => {
    it('Renderiza una card con el producto', () => {
        render(<MockProductCard prod={mockProduct} />);
        const article = screen.getByRole('article');
        expect(article).toBeInTheDocument();
    });

    it('Contiene el título del producto', () => {
        render(<MockProductCard prod={mockProduct} />);
        const title = screen.getByText('Apple iPhone 11', { exact: false });
        expect(title).toBeInTheDocument();
    });

    it('Contiene una foto del producto', () => {
        render(<MockProductCard prod={mockProduct} />);
        const img = screen.getByAltText('Apple iPhone 11', { exact: false });
        expect(img).toBeInTheDocument();
    });

    it('Contiene un ícono de envio gratis si el valor de "free_shipping" es true', () => {
        render(<MockProductCard prod={mockProduct} />);
        const img = screen.getByAltText('Envío gratis');
        expect(img).toBeInTheDocument();
    });

    it('No contiene un ícono de envio gratis si el valor de "free_shipping" es false', () => {
        render(<MockProductCard prod={mockProductWithoutFreeShipping} />);
        const img = screen.queryByAltText('Envío gratis');
        expect(img).not.toBeInTheDocument();
    });

    it('Muestra el precio del producto formateado', () => {
        render(<MockProductCard prod={mockProduct} />);
        const price = screen.getByText('$177.800');
        expect(price).toBeInTheDocument();
    });

    it('Muestra la ubicación del vendedor', () => {
        render(<MockProductCard prod={mockProduct} />);
        const location = screen.getByText('Capital Federal');
        expect(location).toBeInTheDocument();
    });

    it('Contiene un enlace para ver el producto', () => {
        render(<MockProductCard prod={mockProduct} />);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/items/MLA909922852');
    });
});
