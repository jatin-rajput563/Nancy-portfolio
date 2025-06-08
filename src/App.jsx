import "./App.css";
import Blog from "./components/Blog";
import Clients from "./components/Clients";
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
      <Blog />
      <WhatDo />
      <Clients />
    </>
  );
}

export default App;
