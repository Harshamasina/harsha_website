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
import { Helmet } from 'react-helmet';
import Certifications from './Components/Certifications';
import Experience from './Components/Experience';
import useScrollReveal from './hooks/useScrollReveal';

const App = () => {
  useScrollReveal();

  return(
    <>
      <>
        <Helmet>
          <meta name="description" content="Portfolio of Harsha Masina" />
          <meta name='keywords' content='Portfolio, Harsha Masina, Portfolio of Harsha Masina' />
        </Helmet>
        <NavBar />
        <Banner />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <Certifications />
        <Contact />
        <Footer />
        <GoToTopBtn />
      </>
    </>
  );
}

export default App
