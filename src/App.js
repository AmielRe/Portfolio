import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./themeProvider";
import Home from "./views/Home";

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
          </div>
        ) : (
          <LoadingScreen />
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
