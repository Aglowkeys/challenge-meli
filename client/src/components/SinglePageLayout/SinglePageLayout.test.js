import { screen, render } from '@testing-library/react';
import SinglePageLayout from '.';

describe('Componente <SinglePageLayout />', () => {
    it('Se renderiza correctamente', () => {
        render(<SinglePageLayout />);
        const main = screen.getByRole('main');
        expect(main).toBeInTheDocument();
    });

    it('Muestra los children que se le pasan', () => {
        render(
            <SinglePageLayout>
                <h1>Hola</h1>
                <h2>Hola</h2>
                <div>
                    <h3>Hola</h3>
                </div>
            </SinglePageLayout>
        );
        const titles = screen.getAllByRole('heading');
        expect(titles.length).toBe(3);
    });
});
