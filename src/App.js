import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from "./pages/features/index.jsx";

// Pages
// import Home from './pages/home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Features />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
