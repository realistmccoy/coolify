import { Switch, Route } from 'react-router-dom';
import HomePage from './components/home-page';
import NotFound from './components/not-found';
import Shop from './components/pages/shop/shop';
import './App.scss';

//404
function App() {
  return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/'/>
				<Route path='*' component={NotFound} />
			</Switch>
		</div>
  );
}

export default App;
