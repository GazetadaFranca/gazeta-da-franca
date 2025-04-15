import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <ul className="flex flex-wrap gap-4 justify-center text-sm md:text-base">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/franca">Notícias de Franca</Link></li>
        <li><Link to="/regiao">Notícias da Região</Link></li>
        <li><Link to="/brasil">Notícias do Brasil</Link></li>
        <li><Link to="/mundo">Notícias do Mundo</Link></li>
        <li><Link to="/podcast">Podcast</Link></li>
        <li><Link to="/esporte">Esporte</Link></li>
        <li><Link to="/financas">Finanças</Link></li>
        <li><Link to="/eventos">Eventos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;