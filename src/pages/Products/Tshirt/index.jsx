import React from 'react';
import './styles.css';
import { Link } from  'react-router-dom';

import SidebarFilter from '../../../components/SidebarFilter';

function Tshirt() {
  return (
    <div className="tshirt__page">
      <SidebarFilter />

      <div className="tshirt__container">
        <Link to="/camiseta-regular" className="tshirt__items">
          <img src="images/camiseta01.png" alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 139,99</p>
        </Link>
        <Link to="/" className="tshirt__items">
          <img src="images/camiseta02.png" alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 109,99</p>
        </Link>
        <Link to="/" className="tshirt__items">
          <img src="images/camiseta03.png" alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 120,00</p>
        </Link>
        <Link to="/" className="tshirt__items">
          <img src="images/camiseta04.png" alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 90,00</p>
        </Link>

        <Link to="/" className="tshirt__items">
          <img src="images/camiseta01.png" alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 139,99</p>
        </Link>
        <Link to="/" className="tshirt__items">
          <img src="images/camiseta02.png" alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 109,99</p>
        </Link>
        <Link to="/" className="tshirt__items">
          <img src="images/camiseta03.png" alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 120,00</p>
        </Link>
        <Link to="/" className="tshirt__items">
          <img src="images/camiseta04.png" alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 90,00</p>
        </Link>
      </div>
    </div>
  )
}

export default Tshirt;
