import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";

export default function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
