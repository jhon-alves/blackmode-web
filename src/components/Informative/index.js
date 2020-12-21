import React from 'react';
import './styles.css';

function Informative() {
  return (
    <div className="informative">
      <div className="container-informative">
        <ul>
          <li>
            <ion-icon name="bus-outline"></ion-icon>
            <div className="frete">
              <h4>Frete Grátis</h4>
              <p>Em produtos selecionados</p>
            </div>
          </li>

          <li>
            <ion-icon name="time-outline"></ion-icon>
            <div className="entrega">
              <h4>Entrega Expressa</h4>
              <p>A partir de 2 dias úteis</p>
            </div>
          </li>

          <li>
            <ion-icon name="card-outline"></ion-icon>
            <div className="cartao">
              <h4>Em até 10x sem juros</h4>
              <p>no cartão de crédito</p>
            </div>
          </li>
        </ul>
      </div>
      </div>
  );
}

export default Informative;
