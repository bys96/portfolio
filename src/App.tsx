import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Education from "./sections/Education/Education";
import Contact from "./sections/Contact/Contact";

import Reveal from "./components/common/Reveal";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Reveal className="section-shell section-shell--base">
          <About />
        </Reveal>

        <Reveal className="section-shell section-shell--alt">
          <Experience />
        </Reveal>

        <Reveal className="section-shell section-shell--base">
          <Projects />
        </Reveal>

        <Reveal className="section-shell section-shell--alt">
          <Skills />
        </Reveal>

        <Reveal className="section-shell section-shell--base">
          <Education />
        </Reveal>

        <Reveal className="section-shell section-shell--alt">
          <Contact />
        </Reveal>
      </main>

      <Footer />
    </>
  );
}

export default App;
