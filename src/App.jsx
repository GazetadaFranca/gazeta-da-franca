import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Franca from "./pages/Franca";
import Regiao from "./pages/Regiao";
import Brasil from "./pages/Brasil";
import Mundo from "./pages/Mundo";
import Esporte from "./pages/Esporte";
import Financas from "./pages/Financas";
import Podcast from "./pages/Podcast";
import Eventos from "./pages/Eventos";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/franca" element={<Franca />} />
          <Route path="/regiao" element={<Regiao />} />
          <Route path="/brasil" element={<Brasil />} />
          <Route path="/mundo" element={<Mundo />} />
          <Route path="/esporte" element={<Esporte />} />
          <Route path="/financas" element={<Financas />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/eventos" element={<Eventos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;