import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TechnicalSkills from "./components/TechnicalSkills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navbar />
      {/* Hero Section */}
      <div id="home">
      <Home />
      </div>

      {/* Skills Section */}
      <div id="technicalSkills">
      <TechnicalSkills />
      </div>

      {/* Projects Section */}
      <div id="projects">
      <Projects />
      </div>

      {/* Footer */}
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
}

export default App;
