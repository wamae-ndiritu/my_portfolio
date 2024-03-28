import "./index.css";
import Heroe from "./Components/Heroe";
import Location from "./Components/location/Location";
import AboutMe from "./Components/AboutMe";
import ServiceSection from "./Components/services/ServiceScetion";
import ProjectSection from "./Components/projects/ProjectSection";
import ArticlesSection from "./Components/articles/ArticlesSection";

function App() {
  return (
    <div>
      <Heroe />
      <AboutMe />
      <ServiceSection />
      <ProjectSection />
      <ArticlesSection />
      <Location />
    </div>
  );
}

export default App;
