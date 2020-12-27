import React from 'react';
import './styles.css';

import Whatsapp from '../../../components/Whatsapp';
import SidebarFilter from '../../../components/SidebarFilter';

function Hoodie() {
  return (
    <div className="hoodie__page">
      <Whatsapp />
      <SidebarFilter />
      
      <div className="hoodie__container">
        <div className="hoodie__items">
          <img src="images/moleton01.png" alt=""/>
          <p className="name-product">MOLETOM CANGURU</p>
          <p className="pryce">R$ 299,90</p>
        </div>
        <div className="hoodie__items">
          <img src="images/moleton02.png" alt=""/>
          <p className="name-product">MOLETOM CANGURU</p>
          <p className="pryce">R$ 250,90</p>
        </div>
        <div className="hoodie__items">
          <img src="images/moleton03.png" alt=""/>
          <p className="name-product">MOLETOM CANGURU</p>
          <p className="pryce">R$ 200,90</p>
        </div>
        <div className="hoodie__items">
          <img src="images/moleton04.png" alt=""/>
          <p className="name-product">MOLETOM CANGURU</p>
          <p className="pryce">R$ 299,90</p>
        </div>

        <div className="hoodie__items">
          <img src="images/moleton01.png" alt=""/>
          <p className="name-product">MOLETOM CANGURU</p>
          <p className="pryce">R$ 299,90</p>
        </div>
        <div className="hoodie__items">
          <img src="images/moleton02.png" alt=""/>
          <p className="name-product">MOLETOM CANGURU</p>
          <p className="pryce">R$ 250,90</p>
        </div>
        <div className="hoodie__items">
          <img src="images/moleton03.png" alt=""/>
          <p className="name-product">MOLETOM CANGURU</p>
          <p className="pryce">R$ 200,90</p>
        </div>
        <div className="hoodie__items">
          <img src="images/moleton04.png" alt=""/>
          <p className="name-product">MOLETOM CANGURU</p>
          <p className="pryce">R$ 299,90</p>
        </div>       
      </div>
    </div>
  );
}

export default Hoodie;
