import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
