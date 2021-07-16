import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Results from './pages/Results';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/items' component={Results} />
				<Route exact path='/items/:id' component={Details} />
				<NotFound />
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
