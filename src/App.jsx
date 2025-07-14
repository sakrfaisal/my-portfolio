import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-animated min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-18">
        <div className="mb-16">
          <Hero />
        </div>
        <div className="mb-16">
          <About />
        </div>
        <div className="mb-16">
          <Skills />
        </div>
        <div className="mb-16">
          <Projects />
        </div>
        <div>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
