import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { TechStack } from "./components/TechStack";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Projects />
        <Experience />
        <About />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
