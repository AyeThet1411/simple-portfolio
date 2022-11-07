import "./App.css";
import Bar from "./components/Navbar";
import Banner from "./components/Banner";
import Skill from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Bar />
      <Banner />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
