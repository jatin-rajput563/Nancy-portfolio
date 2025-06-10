import "./App.css";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Idea from "./components/Idea";
import Portfoli from "./components/Portfoli";
import WhatDo from "./components/WhatDo";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Hero />
      <Work />
      <Portfoli />
      <Idea />
      <WhatDo />
      <Clients />
      <Footer />
    </>
  );
}

export default App;
