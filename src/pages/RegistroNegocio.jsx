/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useHistory } from "react-router";
import "../styles/RegistroNegocio.css";
import Dropdown from "../components/Dropdown";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import axios from 'axios';

const RegistroNegocio = () => {
  let history = useHistory();

  const [selectedDropdown, setSelectedDropdown] = useState("");

  /* En la const options es donde se almacenaran las opciones a seleccionar del dropdown */
  const options = ["Carniceria", "Verduleria", "Mercado"];
  const [negocio, setNegocio] = useState();
  const [emailNegocio, setEmailNegocio] = useState();
  const tipoNegocio = selectedDropdown;

  const Negocio = {
    negocio,
    emailNegocio,
    tipoNegocio
  }

  const submit = () => {
    console.log(Negocio);
    axios.post('http://localhost:5000/Negocio/add', Negocio)
    .then( res => console.log(res.data));

  };
  // console.log(tipoNegocio, negocio, emailNegocio);

  return (
    <div className="grid-container">
      <div className="derecha">
        <button
          className="fas fa-arrow-left botones-guia"
          onClick={() => history.goBack()}
        ></button>

        <div className="registronegocio-container">
          <h1>Registro de tu negocio</h1>

          <label htmlFor="negocio">Nombre del negocio</label>

          <input
            type="text"
            id="negocio"
            onChange={(ev) => setNegocio(ev.target.value)}
          ></input>

          <label htmlFor="tipo-negocio">Tipo de negocio</label>
          <Dropdown
            id="tipo-negocio"
            classname="dropdown"
            options={options}
            selected={selectedDropdown}
            setSelected={setSelectedDropdown}
          />

          <label htmlFor="email">Correo electrónico del negocio</label>
          <input
            type="text"
            id="email-negocio"
            onChange={(ev) => setEmailNegocio(ev.target.value)}
          />

              <Button
                onClick={submit}
                linkTo=""
                buttonStyle="btnToLogin"
                buttonSize="btnSizeLogin"
              >
                REGISTRARSE
            </Button>
        </div>
      </div>

      <div className="izquierda">
        <button to="/Registro" className="fas fa-times botones-guia"></button>
      </div>
    </div>
  );
};

export default RegistroNegocio;
