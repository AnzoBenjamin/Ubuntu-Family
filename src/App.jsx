import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Home/Layout";
import Blog from "./components/Blog/Blog";
import UbuntuWays from "./components/Ubuntu/UbuntuWays";
import UbuntuKitchens from "./components/Ubuntu/UbuntuKitchens";
import GrotebbuUmwitsa from "./components/Ubuntu/GrotebbuUmwitsa";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/ubuntu-ways" element={<UbuntuWays/>}/>
          <Route path="/ubuntu-kitchens" element={<UbuntuKitchens/>}/>
          <Route path="/grotebbu-umwitsa" element={<GrotebbuUmwitsa/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
