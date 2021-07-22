import { screen, render } from '@testing-library/react';
import Paragraphs from '.';

const mockText =
    'La notebook Lenovo IdeaPad 3 fue pensada para hacer tu vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarla, la convertirá en tu PC favorita. Cualquier tarea que te propongas, ya sea en casa o en la oficina, la harás con facilidad gracias a su poderoso rendimiento.\n\nPantalla con gran impacto visual\nSu pantalla de 14" y 1920x1080px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle. \n\nEficiencia a tu alcance\nSu procesador Intel Core i5 de 4 núcleos, está pensado para aquellas personas generadoras y consumidoras de contenidos. Con esta unidad central, la máquina llevará a cabo varios procesos de forma simultánea, desde edición de videos hasta retoques fotográficos con programas profesionales.\n\nPotente disco sólido \nEl disco sólido de 512 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas.\n\nUn procesador exclusivo para los gráficos\nSu placa de video Intel UHD Graphics convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.\n\nUna batería que acompaña tu jornada\nLa batería de este equipo tiene una autonomía de alrededor de 7.7 horas. La duración varía según el uso, la configuración y otros factores, pero vas a poder usarla durante varias horas sin depender de los enchufes.';

describe('Componente <Paragraphs />', () => {
    it('Renderiza párrafos en pantalla', () => {
        render(<Paragraphs string={mockText} />);
        const paragraph = screen.getByTestId('test-0');
        expect(paragraph).toBeInTheDocument();
    });

    it('Arroja un error si no se le pasa la prop "string"', () => {
        expect(() => {
            render(<Paragraphs />);
        }).toThrow();
    });

    it('Arroja un error si la prop "string" contiene cualquier cosa que no sea de tipo string', () => {
        expect(() => {
            render(<Paragraphs string={true} />);
        }).toThrow();
    });

    it('Sólo renderiza strings con contenido', () => {
        render(<Paragraphs string='\nEste es un string\n\n\n\n\n' />);
        const paragraphs = screen.getAllByTestId(/^test-/g);
        expect(paragraphs.length).toBe(1);
    });
});
