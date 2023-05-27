import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Banner from './Components/Banner';
import Resume from './Components/Resume';
import GoToTopBtn from './Components/GoToTopBtn';

const App = () => {
  return(
    <>
      <>
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
        <GoToTopBtn />
      </>
    </>
  );
}

export default App