import "./index.css";
import Heroe from "./Components/Heroe";
import Location from "./Components/location/Location";
import AboutMe from "./Components/AboutMe";
import ServiceSection from "./Components/services/ServiceScetion";
import ProjectSection from "./Components/projects/ProjectSection";
import ArticlesSection from "./Components/articles/ArticlesSection";
import { useEffect, useState } from "react";
import LoadingSpinner from "./loading/LoadingSpinner";
import Footer from "./Components/Footer";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }, []);
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <Heroe />
          <AboutMe />
          <ServiceSection />
          <ProjectSection />
          <ArticlesSection />
          <Location />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
