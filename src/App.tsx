import React from "react";
import "./App.css";
import { Layout } from "./Components/Layout/Layout";
import { Hero } from "./Pages/Hero";
import { About } from "./Pages/About";
import { Services } from "./Pages/Services";
import { Type } from "./Pages/Type";
import { Reviews } from "./Pages/Reviews";
import { Blog } from "./Pages/Blog";

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <About />
        <Services />
        <Type />
        <Reviews />
        <Blog />
      </Layout>
    </div>
  );
}

export default App;
