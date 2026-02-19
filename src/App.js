import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { ContentA } from "./components/ContentA";
import { ContentB } from "./components/ContentB";

function App() {
  return (
    <div>
      <Header />
      <ContentA />
      <ContentB />
      <Footer />
    </div>
  );
}

export default App;