import ProjectContainer from './components/ProjectContainer';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe'; 
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';  

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <ProjectContainer />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
