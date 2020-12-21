import React from 'react';
import './styles.css';

import SidebarFilter from '../../../components/SidebarFilter';

function Tshirt() {
  return (
    <div className="tshirt__page">
      <SidebarFilter />

      <div className="tshirt__container">
        <div className="tshirt__items">
          <img src="images/camiseta01.png" alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 139,99</p>
        </div>
        <div className="tshirt__items">
          <img src="images/camiseta02.png" alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 109,99</p>
        </div>
        <div className="tshirt__items">
          <img src="images/camiseta03.png" alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 120,00</p>
        </div>
        <div className="tshirt__items">
          <img src="images/camiseta04.png" alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 90,00</p>
        </div>

        <div className="tshirt__items">
          <img src="images/camiseta01.png" alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 139,99</p>
        </div>
        <div className="tshirt__items">
          <img src="images/camiseta02.png" alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 109,99</p>
        </div>
        <div className="tshirt__items">
          <img src="images/camiseta03.png" alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 120,00</p>
        </div>
        <div className="tshirt__items">
          <img src="images/camiseta04.png" alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 90,00</p>
        </div>
      </div>
    </div>
  )
}

export default Tshirt;
