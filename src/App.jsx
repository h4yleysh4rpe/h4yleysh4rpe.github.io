import { useState } from "react";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import MouseBlob from "./components/MouseBlob.jsx";

function App() {
  return (
    <div className="bg-bgblue min-h-full text-gold p-6 text-3xl">
      <MouseBlob />
      <Header />
      <div className="h-48"></div>
      <HeroSection />
    </div>
  );
}

export default App;
