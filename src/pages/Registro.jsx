import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import "../styles/Registro.css";
import axios from 'axios';


const Registro = () => {

  /* En las variables email y password se almacenan los datos del login */
  const [nombre_cliente, setNombre] = useState("");
  const [apellido_cliente, setApellido] = useState("");
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rep_pw, setRep_Password] = useState("");

  const Cliente = {
    nombre_cliente,
    apellido_cliente,
    mail,
    password,
    rep_pw
  }
  const submit = () => {
    console.log(Cliente);
    axios.post('http://localhost:5000/clients/add', Cliente)
    .then(res => console.log(res.data));
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
                id="nombre_cliente"
                placeholder="Nombre"
                onChange={(ev) => setNombre(ev.target.value)}
              />
              <input
                type="text"
                id="apellido_cliente"
                placeholder="Apellido"
                onChange={(ev) => setApellido(ev.target.value)}
              />
              <input
                type="text"
                id="mail"
                placeholder="Correo Electrónico"
                onChange={(ev) => setEmail(ev.target.value)}
              />

              <input
                type="password"
                id="password"
                placeholder="Contraseña"
                onChange={(ev) => setPassword(ev.target.value)}
              />

              <input
                type="password"
                id="rep_pw"
                placeholder="Repetir contraseña"
                onChange={(ev) => setRep_Password(ev.target.value)}
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
