import './App.css';
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Jobs from './components/Jobs';
import Contact  from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Jobs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
