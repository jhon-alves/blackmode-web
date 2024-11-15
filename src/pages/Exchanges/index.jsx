import React, { useEffect } from 'react';
import './styles.css';

function Exchanges() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="exchange">
      <div className="exchange__container">
        <h1>Trocas e Devoluções</h1>
        <h4>Regras de trocas e devoluções:</h4>
        <p>Se você não está de acordo com nosso produto recebido, pode 
          realizar uma troca do mesmo das seguintes formas:</p>
        <p>1. O prazo para trocar ser solicitade é de até 7 dias corridos 
          após o recebimento do produto;</p>
        <p>2. Para isso entre em contato com contato@blackmode.com.br;</p>
        <p>3. Caso o produto não tenha atendido as suas expectativas você 
          também poderá ter o seu dinheiro de volta. Para a devolução do 
          dinheiro, você tem até 7 dias para fazer a solicitação, 
          a partir da compra.</p>
      </div>
    </div>
  );
}

export default Exchanges;
