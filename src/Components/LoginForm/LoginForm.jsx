import React from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Inicio de sesión</h1>
        <div className="input-box">
          <input type="text" placeholder="Usuario" required />
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Contraseña" required />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Recordarme
          </label>
          <a href="#">Olvidaste tu contraseña?</a>
        </div>

        <button type="submit">Entrar</button>

        <div className="register-link">
          <p>
            Aun no tienes cuenta? <a href="#">Registrarse</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
