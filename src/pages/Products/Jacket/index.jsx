import React from 'react';
import './styles.css';

import SidebarFilter from '../../../components/SidebarFilter';

function Jacket() {
  return (
    <div className="jacket__page">
      <SidebarFilter />

      <div className="jacket__container">
        <div className="jacket__items">
          <img src="images/jaqueta01.png" alt=""/>
          <p className="name-product">JAQUETA COTELÊ TRADICIONAL</p>
          <p className="pryce">R$ 600,00</p>
        </div>
        <div className="jacket__items">
          <img src="images/jaqueta02.png" alt=""/>
          <p className="name-product">JAQUETA COTELÊ TRADICIONAL</p>
          <p className="pryce">R$ 600,00</p>
        </div>
        <div className="jacket__items">
          <img src="images/jaqueta03.png" alt=""/>
          <p className="name-product">JAQUETA JEANS</p>
          <p className="pryce">R$ 800,00</p>
        </div>
        <div className="jacket__items">
          <img src="images/jaqueta04.png" alt=""/>
          <p className="name-product">JAQUETA SARJA TRADICIONAL</p>
          <p className="pryce">R$ 550,00</p>
        </div>

        <div className="jacket__items">
          <img src="images/jaqueta01.png" alt=""/>
          <p className="name-product">JAQUETA COTELÊ TRADICIONAL</p>
          <p className="pryce">R$ 600,00</p>
        </div>
        <div className="jacket__items">
          <img src="images/jaqueta02.png" alt=""/>
          <p className="name-product">JAQUETA COTELÊ TRADICIONAL</p>
          <p className="pryce">R$ 600,00</p>
        </div>
        <div className="jacket__items">
          <img src="images/jaqueta03.png" alt=""/>
          <p className="name-product">JAQUETA JEANS</p>
          <p className="pryce">R$ 800,00</p>
        </div>
        <div className="jacket__items">
          <img src="images/jaqueta04.png" alt=""/>
          <p className="name-product">JAQUETA SARJA TRADICIONAL</p>
          <p className="pryce">R$ 550,00</p>
        </div>
      </div>
    </div>
  )
}

export default Jacket;
