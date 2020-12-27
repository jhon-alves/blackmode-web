import React from 'react';
import './styles.css';

import Whatsapp from '../../../components/Whatsapp';
import SidebarFilter from '../../../components/SidebarFilter';

function Pants() {
  return (
    <div className="pants__page">
      <Whatsapp />
      <SidebarFilter />

      <div className="pants__container">
        <div className="pants__items">
          <img src="images/calca01.png" alt=""/>
          <p className="name-product">CALÇA JOGGER</p>
          <p className="pryce">R$ 250,90</p>
        </div>
        <div className="pants__items">
          <img src="images/calca02.png" alt=""/>
          <p className="name-product">CALÇA ALFAIATARIA SLIM</p>
          <p className="pryce">R$ 500,00</p>
        </div>
        <div className="pants__items">
          <img src="images/calca03.png" alt=""/>
          <p className="name-product">CALÇA ALFAIATARIA SLIM</p>
          <p className="pryce">R$ 500,00</p>
        </div>
        <div className="pants__items">
          <img src="images/calca04.png" alt=""/>
          <p className="name-product">CALÇA JOGGER</p>
          <p className="pryce">R$ 279,90</p>
        </div>

        <div className="pants__items">
          <img src="images/calca01.png" alt=""/>
          <p className="name-product">CALÇA JOGGER</p>
          <p className="pryce">R$ 250,90</p>
        </div>
        <div className="pants__items">
          <img src="images/calca02.png" alt=""/>
          <p className="name-product">CALÇA ALFAIATARIA SLIM</p>
          <p className="pryce">R$ 500,00</p>
        </div>
        <div className="pants__items">
          <img src="images/calca03.png" alt=""/>
          <p className="name-product">CALÇA ALFAIATARIA SLIM</p>
          <p className="pryce">R$ 500,00</p>
        </div>
        <div className="pants__items">
          <img src="images/calca04.png" alt=""/>
          <p className="name-product">CALÇA JOGGER</p>
          <p className="pryce">R$ 279,90</p>
        </div>        
      </div>
    </div>
  )
}

export default Pants;