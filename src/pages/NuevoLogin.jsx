import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import "../styles/NuevoLogin.css";
import axios from 'axios';

const NuevoLogin = () => {

  /* En las variables email y password se almacenan los datos del login */
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Cliente = {
    mail,
    password
  }
  
  const submit = () => {
    console.log(Cliente);
    axios.post('http://localhost:5000/clients/login/Cliente', Cliente)
    .then(res => console.log(res.data));
    //alert(`${email}, ${password}`);
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
                <Link to="/">
                  ¿Olvidaste tu contraseña?
              </Link>
              </p>
              <p>
                <Link to="/Registro">
                  ¿No tenés una cuenta aún? ¡Registrate!
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
