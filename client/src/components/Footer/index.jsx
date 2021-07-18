import Container from '../Container';
import './styles.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <p>
                    Realizado por{' '}
                    <a href='http://github.com/Aglowkeys' target='_blank' rel='noopener noreferrer'>
                        Emiliano Alfonso
                    </a>
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
