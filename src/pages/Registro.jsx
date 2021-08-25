import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import "../styles/Registro.css";

const Registro = () => {

  /* En las variables email y password se almacenan los datos del login */
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    alert(`${email}, ${password},${nombre},${apellido}`);
  };

  return (
    <div className="main">
      <div className="main-container">
      <div className="registro-img-container">

</div>
        <div className="login-container">
          <div className="login-main-container">
            <div className="logotext-container">
              <p>REGISTRATE A</p>
              <h1>Proyecto Solidario</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                odit fugiat consectetur rerum ex magni!
            </p>
            </div>

            <div className="input-container">
            <input
                type="text"
                id="nombre"
                placeholder="Nombre"
                onChange={(ev) => setNombre(ev.target.value)}
              />
              <input
                type="text"
                id="apellido"
                placeholder="Apellido"
                onChange={(ev) => setApellido(ev.target.value)}
              />
              <input
                type="text"
                id="email"
                placeholder="Correo Electrónico"
                onChange={(ev) => setEmail(ev.target.value)}
              />

              <input
                type="password"
                id="password"
                placeholder="Contraseña"
                onChange={(ev) => setPassword(ev.target.value)}
              />

              <Button
                onClick={submit}
                linkTo=""
                buttonStyle="btnToLogin"
                buttonSize="btnSizeLogin"
              >
                REGISTRARSE
            </Button>

              <p>
                <Link to="/Login">
                  ¿Ya tenés una cuenta? ¡Ingresá!
              </Link>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Registro ;
