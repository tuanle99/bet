import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/HomeScreen";
import History from "./pages/HistoryScreen";
import Members from "./pages/MemberScreen";
import Bet from "./pages/BetScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bet" element={<Bet />} />
        <Route path="/history" element={<History />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </Router>
  );
}

export default App;
