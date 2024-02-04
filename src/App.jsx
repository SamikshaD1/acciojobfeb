import React from "react";
import Home from "./components/Home";
import CardDetails from "./components/CardDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
