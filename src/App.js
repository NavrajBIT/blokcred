import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import Create from "./components/Create/Create";
import Institution from "./components/Institution/Institution";
import View from "./components/View/View";
import BlockCred from "./components/BlockCred/BlockCred";
import Souvenier from "./components/Souvenier/Souvenier";
import Admin from "./components/admin/admin";
import Footer from "./components/footer/footer";

import UserState from "./context/userState";

function App() {
  return (
    <Router>
      <div className="App">
        <UserState>
          <Navbar />
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/institution" element={<Institution />} />
            <Route path="/view" element={<View />} />
            <Route path="/" element={<BlockCred />} />
            <Route path="/home" element={<BlockCred />} />
            <Route path="/souvenir" element={<Souvenier />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Footer />
        </UserState>
      </div>
    </Router>
  );
}

export default App;
