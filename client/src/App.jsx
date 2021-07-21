import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Home from './pages/Home';
import Results from './pages/Results';
import Details from './pages/Details';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Container>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/items' component={Results} />
                    <Route exact path='/items/:id' component={Details} />
                    <NotFound />
                </Switch>
            </Container>
            <Footer />
        </div>
    );
};

export default App;
