import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Education from "./sections/Education/Education";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
