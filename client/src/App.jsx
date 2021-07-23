import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Home from './pages/Home';
import Results from './pages/Results';
import Details from './pages/Details';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/items' component={Results} />
                    <Route exact path='/items/:id' component={Details} />
                    <PageNotFound />
                </Switch>
            </Container>
            <Footer />
        </>
    );
};

export default App;
