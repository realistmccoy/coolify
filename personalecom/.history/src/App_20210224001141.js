import { Switch, Route } from 'react-router-dom';
import HomePage from './components/home-page';
import './App.scss';

function App() {
  return (
		<div className='App'>
			<Switch>
				<Route exact path='/' components={HomePage}></Route>
			</Switch>
		</div>
  );
}

export default App;
