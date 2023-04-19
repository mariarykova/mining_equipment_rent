import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Catalogue from "./components/Catalogue/catalogue";

import Header from "./components/Header/header";

//import data from "./equipments.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
    </div>
  );
}

export default App;
