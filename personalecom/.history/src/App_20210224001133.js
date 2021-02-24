import { Switch, Route } from 'react-router-dom';
import HomePage from './components'
import './App.scss';

function App() {
  return (
		<div className='App'>
			<Switch>
				<Route exact path='/' components={}></Route>
			</Switch>
		</div>
  );
}

export default App;
