import React, { useState } from "react";
import { Button } from "../components/Button";
import "../styles/Registro.css";
import Dropdown from "../components/Dropdown";
import axios from 'axios';


const Registro = () => {
  
  const [selectedDropdown, setSelectedDropdown] = useState("");
  /* En las variables email y password se almacenan los datos del login */
  const options = ["Carniceria", "Verduleria", "Mercado"];
  const [nombre_negocio, setNegocio] = useState();
  const [emailNegocio, setEmailNegocio] = useState();
  const tipoNegocio = selectedDropdown;
  

  const Negocio = {
    nombre_negocio,
    emailNegocio,
    tipoNegocio
  }
  const submit = () => {
    console.log(Negocio);
    axios.post('http://localhost:5000/negocio/add', Negocio)
    .then( res => console.log(res.data));
    //alert(`${email}, ${password},${nombre},${apellido}`);
  };

  return (
    <div className="main">
      <div className="main-container">
      <div className="registro-img-container">

</div>
        <div className="login-container">
          <div className="login-main-container">
            <div className="logotext-container">
              <p>REGISTRATE EN</p>
              <h1>Proyecto Solidario</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                odit fugiat consectetur rerum ex magni!
            </p>
            </div>

            <div className="input-container">
            <input
                type="text"
                id="nombre_negocio"
                placeholder="Nombre"
                onChange={(ev) => setNegocio(ev.target.value)}
              />
              
        
              <input
                type="email"
                id="emailNegocio"
                placeholder="Correo Electrónico"
                onChange={(ev) => setEmailNegocio(ev.target.value)}
              />

              <label htmlFor="tipo-negocio">Tipo de negocio</label>
              <Dropdown
                id="tipo-negocio"
                classname="dropdown"
                options={options}
                selected={selectedDropdown}
                setSelected={setSelectedDropdown}
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
        </div>

      </div>
    </div>
  );
};

export default Registro ;
