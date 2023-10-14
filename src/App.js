import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./themeProvider";
import About from "./views/About";
import Home from "./views/Home";
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
          </div>
        ) : (
          <LoadingScreen />
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
