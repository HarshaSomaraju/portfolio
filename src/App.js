import React from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
      <main>
        <Navbar />
        <Home />
        <Contact />
      </main>
  );
}

export default App;
