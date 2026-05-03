import { useState } from "react";
import { ImageSizeContext } from "./components/exercise-1/Context";
import List from "./components/exercise-1/List";

import ThemeProvider from "./components/exercise-2/ThemeProvider";
import Button from "./components/exercise-2/Button";

import { LanguageProvider } from "./components/exercise-3/LanguageContext";
import AppContent from "./components/exercise-3/AppContent";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/exercise-4/Home";
import { About } from "./components/exercise-4/About";
import { Contact } from "./components/exercise-4/Contact";
import "./App.css";
import { Navbar } from "./components/exercise-4/Navbar";

function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <>
      <ImageSizeContext.Provider value={imageSize}>
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={(e) => setIsLarge(e.target.checked)}
          />
          Use large images
        </label>

        <List />
      </ImageSizeContext.Provider>

      <hr />
      {/* Task-2 */}

      <ThemeProvider>
        <Button />
      </ThemeProvider>

      <hr />
      {/* Task-3 */}

      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
      <hr />
      {/* Task-4 */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
