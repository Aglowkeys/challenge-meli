import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductsContainer from '.';
import { arrayProd } from './__mocks__';

const MockProductsContainer = ({ arrayProd }) => (
    <BrowserRouter>
        <ProductsContainer arrayProd={arrayProd} />
    </BrowserRouter>
);

describe('Componente <ProductsContainer />', () => {
    beforeEach(() => {
        render(<MockProductsContainer arrayProd={arrayProd} />);
    });

    it('Se renderiza correctamente', () => {
        const main = screen.getByRole('main');
        expect(main).toBeInTheDocument();
    });

    it('Muestra tantas <ProductCard /> como elementos tenga el array que recibe por props', () => {
        const productCards = screen.getAllByRole('article');
        expect(productCards.length).toBe(4);
    });
});

describe('Validación de props', () => {
    it('Arroja un error si no se le pasa una prop "arrayProd"', () => {
        expect(() => {
            render(<MockProductsContainer />);
        }).toThrow();
    });

    it('Arroja un error si no se le pasa un array de productos', () => {
        expect(() => {
            render(<MockProductsContainer arrayProd='Esto es un string' />);
        }).toThrow();
    });

    it('No arroja un error si le llega un array vacío', () => {
        expect(() => {
            render(<MockProductsContainer arrayProd={[]} />);
        }).not.toThrow();
    });
});
