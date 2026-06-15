import { About } from "./components/About";
import { AboutPreview } from "./components/AboutPreview";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
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
        <AboutPreview />
        <Experience />
        <Projects />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
