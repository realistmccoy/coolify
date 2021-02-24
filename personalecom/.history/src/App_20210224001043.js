import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Hero from './components/hero/hero';
import MainSection from './components/main-section/main-section';
import ContactForm from './components/contactform/contactForm';
import FeatureCollection from './components/featureCollection/featureCollection';
import Footer from './components/footer/footer';
import './App.scss';

function App() {
  return (
		<div className='App'>
			<Switch>
				<Route exact path=''></Route>
			</Switch>
		</div>
  );
}

export default App;
