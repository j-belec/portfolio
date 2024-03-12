import Intro from "./Components/Intro";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import ProyectsAndExperience from "./Components/ProyectsAndExperience";
import Footer from "./Components/Footer";
// import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <AboutMe />
      <ProyectsAndExperience />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
