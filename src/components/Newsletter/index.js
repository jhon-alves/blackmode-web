import React from 'react';

import './styles.css';

function Newsletter() {
  return(
    <div className="newsletter">
      <div className="container-news">
        <h1>Receba ofertas exclusivas</h1>
        <p>Quer receber nossas ofertas? Cadastre-se e comece a recebê-las!</p>
        <div className="register-news">
          <input type="text" className="inp-news" placeholder="Digite o seu email" />
          <button className="btn-news">Casdastrar</button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;