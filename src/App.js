import ArrowIcon from "@material-ui/icons/ArrowUpward";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-up";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./themeProvider";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Projects from "./views/Projects";
import TechStack from "./views/TechStack";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <ThemeProvider>
      <>
        {!loading ? (
          <div>
            <Navbar />
            <Home />
            <About />
            <TechStack />
            <Projects />
            <Contact />
            <ScrollToTop showUnder={160}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px", // Adjust the size of the circle as needed
                  height: "40px", // Make sure width and height are equal for a circle
                  borderRadius: "50%", // Creates a circle
                  borderWidth: 5,
                }}
              >
                <ArrowIcon className="text-xl text-cyan-400" />
              </span>
            </ScrollToTop>
          </div>
        ) : (
          <LoadingScreen />
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
