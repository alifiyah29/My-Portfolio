import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
