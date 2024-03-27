import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

// Import components
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <Router>
      {/* Mon Header apparait sur toutes les pages */}
      <Header />
      {/* Le composant Routes doit contenir toutes mes routes, il affiche un seul de ses enfants à la fois */}
      <Routes>
        {/* path=chemin element=le composant à afficher si l'url correspond au chemin */}
        <Route path="/" element={<Home />} />
        {/* La route offer/:id necessite l'envoie d'un params */}
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="*" element={<p>Error 404</p>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
