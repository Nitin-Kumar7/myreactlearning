import React from "react";
import "./App.css";
// import "./assets/css/style.css";
import "./assets/css/font-icons.css";
import Home from "./pages/Home/Home";
import { Navbar, Footer } from "./components/";

function App() {
  return (
    <>
      <Navbar />
      <main className="main oh" id="main">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
