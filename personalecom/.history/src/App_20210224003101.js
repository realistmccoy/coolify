import { Switch, Route } from 'react-router-dom';
import HomePage from './components/home-page';
import './App.scss';

function App() {
  return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/'/>
			</Switch>
		</div>
  );
}

export default App;
