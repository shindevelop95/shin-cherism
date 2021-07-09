import './App.css';
import Nav from './components/Nav/Nav'
import Landing from './components/Landing/Landing'
import Slides from './components/Slides/Slides'
import About from './components/About/About'
import Feature from './components/Feature/Feature'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Slides/>
      <About/>
      <Feature/>
      <Footer/>
    </div>
  );
}

export default App;
