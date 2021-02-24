import Header from './components/header/header.jsx';
import Hero from './components/hero/hero';
import MainSection from './components/main-section/main-section';
import ContactForm from './components/contactform/contactForm';
import FeatureProduct from './components/featureCollection/'
import './App.scss';

function App() {
  return (
		<div className='App'>
			<Header />
			<Hero />
			<MainSection />
			<ContactForm />
		</div>
  );
}

export default App;
