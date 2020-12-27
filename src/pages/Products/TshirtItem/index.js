import React from 'react';
import './styles.css';

import { ArrowBack, ArrowForward } from '@material-ui/icons';

function TshirtItem() {
  return (
    <div className="tshirt__item">
      <div className="tshirt__item__container">
        <div className="tshirt__item__left">
          <img src="/images/camiseta01.png" />

          <div className="icons__button">
            <ArrowBack className="btn__icon__prev btn__icon" />
            <ArrowForward className="btn__icon__next btn__icon" />
          </div>
        </div>
        <div className="tshirt__item__right">
          <div className="tshirt__item__right__container">
            <div className="tshirt__item__title">
              <h2>Camiseta Regular Black</h2>
            </div>
            <div className="tshirt__item__price">
              <p>R$ 89,90</p>
            </div>
            <div className="tshirt__item__size">
              <p>Size: <span>P</span> <span>M</span> <span>G</span></p>
            </div>
            <div className="btn__buy">
              <button>Comprar</button>
            </div>
            <div className="product__description">
              <h3>Descrição</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley of type 
                and scrambled it to make a type specimen book. It has survived not 
                only five centuries, but also the leap into electronic typesetting.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TshirtItem;
