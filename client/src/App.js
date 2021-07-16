import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Results from './pages/Results';
import Details from './pages/Details';

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<Route exact path='/' component={Home} />
			<Route exact path='/items' component={Results} />
			<Route exact path='/items/:id' component={Details} />
		</div>
	);
};

export default App;
