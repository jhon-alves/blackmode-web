import React from 'react';
import './styles.css';

function Questions() {
  return (
    <>
      <div className="questions">
        <div className="questions__container">
          <h1>Perguntas Frequentes</h1>

          <h4>Qual é o custo de envio?</h4>
          <p>O custo de envio será mostrado na hora do checkout baseado na sua 
            localização e nos produtos adquiridos. Alguns produtos, 
            disponibilizamos o frete grátis.</p>

          <h4>Entrega para todo o Brasil?</h4>
          <p>Sim! realizamos envios para todo o país.</p>

          <h4>Quanto tempo leva para meu produto chegar?</h4>
          <p>O tempo de entrega dependerá do tipo de envio selecionado. 
            Em geral, leva entre 3 e 7 dias úteis após a confirmação do pagamento.</p>

          <h4>Qual o prazo para realizar uma troca?</h4>
          <p>Você tem até 15 dias, após a compra.</p>

          <h4>Que devo fazer se o produto não chega em bom estado?</h4>
          <p>Entre em contato conosco via e-mail: contato@blackmode.com.br e te 
            enviaremos um novo.</p>
        </div>
      </div>
    </>
  );
}

export default Questions;
