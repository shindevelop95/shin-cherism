import './App.css';
import Nav from './components/Nav/Nav'
import Landing from './components/Landing/Landing'
import Slides from './components/Slides/Slides'
import About from './components/About/About'

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Slides/>
      <About/>
    </div>
  );
}

export default App;
