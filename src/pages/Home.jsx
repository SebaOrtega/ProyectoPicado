import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import { Button } from "../components/Button";
import "../styles/Home.css";

const Home = () => {
  const [selectedUbication, setSelectedUbication] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const barrios = ["Villa Urquiza", "Villa Crespo", "Chacarita", "Villa Urquiza", "Villa Crespo", "Chacarita", "Villa Urquiza", "Villa Crespo", "Chacarita"];
  const categorias = ["Verduleria", "Carniceria", "Tecnología"];

  return (
    <div className="home-container">
      <div className="alt-container">
        <h1>Apoyá a tus negocios locales!</h1>

        <div className="home-input-container">
          <div className="ubicacion-container">
            <label htmlFor="ubicacion">Ingresá tu barrio</label>

            <div className="home-input-izquierdo">
              <Dropdown
                id="ubicacion"
                classname="dropdown-ubicacion"
                options={barrios}
                selected={selectedUbication}
                setSelected={setSelectedUbication}
              />

              <input
                type="text"
                id="negocio"
                placeholder="Ej. Manuela Pedraza 5258"
                onChange={(ev) => ev.target.value}
              ></input>
            </div>
          </div>

          <div className="categoria-container">
            <label htmlFor="categoria">Qué estás buscando?</label>

            <div className="home-input-derecho">
              <Dropdown
                id="ubicacion"
                classname="dropdown-categoria"
                options={categorias}
                selected={selectedCategory}
                setSelected={setSelectedCategory}
              />

              <Button
                linkTo="/"
                buttonStyle="btnToHome"
                buttonSize="btnSizeHome"
              >
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
