import React from 'react';
import './styles.css';

function Login() {
  return (
    <div className="login__page">
      <h1>Login</h1>
      <p>Por favor, preencha os campos abaixo para entrar em sua conta!</p>
      <form>
        <input className="login__input" type="text" placeholder="E-mail"/>
        <input className="login__input" type="text" placeholder="Senha" />
        <button className="login__btn">Entrar</button>
      </form>
    </div>
  )
}

export default Login;
