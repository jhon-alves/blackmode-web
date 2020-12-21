import React from 'react';
import './styles.css';

function Login() {
  return (
    <div className="login__page">
      <div className="login__container__info">
        <div className="login__container__details">
          <h1>Login</h1>
        </div>
      </div>
      
      <div className="login__container__form">
        <form>
          <input className="login__input" type="text" placeholder="E-mail"/>
          <input className="login__input" type="text" placeholder="Senha" />
          <button className="login__btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
