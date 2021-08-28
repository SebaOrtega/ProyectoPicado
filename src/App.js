import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import NuevoLogin from "./pages/NuevoLogin";
import Navbar from "./components/Navbar.jsx";
import Registro from "./pages/Registro";
import RegistroNegocio from "./pages/RegistroNegocio";

//import CreateClient from "./components/create-client.component";
const App = () => {
  const [showNav, setShowNav] = useState(true);


  /* Oculta la navbar en las rutas que no tenga que estar */
  const toggleNav = (options) => {
    setShowNav(options);
  };

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (!showNav) {
      if (!navbar.classList.contains("navbar-hide")) {
        navbar.classList.add("navbar-hide");
      }
    } else {
      if (navbar.classList.contains("navbar-hide")) {
        navbar.classList.remove("navbar-hide");
      }
    }
  });

  return (
    <Router>
      <Navbar showNav={(state) => toggleNav(state)} />
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Login" > 
          <NuevoLogin />
        </Route>
        <Route path="/Registro" /*component={CreateClient}*/>
          <Registro />
        </Route>
        <Route path="/RegistroNegocio">
          <RegistroNegocio />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
