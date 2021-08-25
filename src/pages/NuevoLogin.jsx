import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import "../styles/NuevoLogin.css";

const NuevoLogin = () => {

  /* En las variables email y password se almacenan los datos del login */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    alert(`${email}, ${password}`);
  };

  return (
    <div className="main">
    <div className="main-container">
      <div className="login-container">
        <div className="login-main-container">
          <div className="logotext-container">
            <p>BIENVENIDO A</p>
            <h1>Proyecto Solidario</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              odit fugiat consectetur rerum ex magni!
            </p>
          </div>

          <div className="input-container">
            <input
              type="email"
              id="email"
              placeholder="Usuario"
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
              INICIAR SESIÓN
            </Button>

            <p>
              <Link to="/" className="soswachin">
                Has olvidado tu contraseña?
              </Link>
            </p>
            <p>
              <Link to="/Registro" className="soswachin">
                No tenes una cuenta aún? Registrate!
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="img-container">
        
      </div>
    </div>
    </div>
  );
};

export default NuevoLogin;
