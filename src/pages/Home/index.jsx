import React, { useEffect } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import Slide from '../../components/Slide';
import Informative from '../../components/Informative';

import tShirt1 from '../../assets/images/camiseta01.png';
import tShirt2 from '../../assets/images/camiseta02.png';
import tShirt3 from '../../assets/images/camiseta03.png';
import tShirt4 from '../../assets/images/camiseta04.png';

import shirt1 from '../../assets/images/moleton01.png';
import shirt2 from '../../assets/images/moleton02.png';
import shirt3 from '../../assets/images/moleton03.png';
import shirt4 from '../../assets/images/moleton04.png';

import jaquet1 from '../../assets/images/jaqueta01.png';
import jaquet2 from '../../assets/images/jaqueta02.png';
import jaquet3 from '../../assets/images/jaqueta03.png';
import jaquet4 from '../../assets/images/jaqueta04.png';

import pants1 from '../../assets/images/calca01.png';
import pants2 from '../../assets/images/calca02.png';
import pants3 from '../../assets/images/calca03.png';
import pants4 from '../../assets/images/calca04.png';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return(
    <>
    <Slide />
    <Informative />

    <div className="destaques">
      <h1 className="title-destaques first">Destaques</h1>
      <div className="container">
        <Link to="/camiseta-regular" className="one">
          <img src={tShirt1} alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 139,99</p>
        </Link>
        <Link to="/" className="one">
          <img src={tShirt2} alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 109,99</p>
        </Link>
        <Link to="/" className="one">
          <img src={tShirt3} alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 120,00</p>
        </Link>
        <Link to="/" className="one">
          <img src={tShirt4} alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 90,00</p>
        </Link>
      </div>
    </div>

    <div className="destaques">
      <h1 className="title-destaques">Moletons</h1>
      <div className="container">
        <Link to="/" className="one">
          <img src={shirt1} alt=""/>
          <p className="name-product">MOLETOM CANGURU</p>
          <p className="pryce">R$ 299,90</p>
        </Link>
        <Link to="/" className="one">
          <img src={shirt2} alt=""/>
          <p className="name-product">MOLETOM CANGURU</p>
          <p className="pryce">R$ 250,90</p>
        </Link>
        <Link to="/" className="one">
          <img src={shirt3} alt=""/>
          <p className="name-product">MOLETOM CANGURU</p>
          <p className="pryce">R$ 200,90</p>
        </Link>
        <Link to="/" className="one">
          <img src={shirt4} alt=""/>
          <p className="name-product">MOLETOM CANGURU</p>
          <p className="pryce">R$ 299,90</p>
        </Link>
      </div>
    </div>

    <div className="destaques">
      <h1 className="title-destaques">Jaquetas</h1>
      <div className="container">
        <Link to="/" className="one">
          <img src={jaquet1} alt=""/>
          <p className="name-product">JAQUETA COTELÊ TRADICIONAL</p>
          <p className="pryce">R$ 600,00</p>
        </Link>
        <Link to="/" className="one">
          <img src={jaquet2} alt=""/>
          <p className="name-product">JAQUETA COTELÊ TRADICIONAL</p>
          <p className="pryce">R$ 600,00</p>
        </Link>
        <Link to="/" className="one">
          <img src={jaquet3} alt=""/>
          <p className="name-product">JAQUETA JEANS</p>
          <p className="pryce">R$ 800,00</p>
        </Link>
        <Link to="/" className="one">
          <img src={jaquet4} alt=""/>
          <p className="name-product">JAQUETA SARJA TRADICIONAL</p>
          <p className="pryce">R$ 550,00</p>
        </Link>
      </div>
    </div>

    <div className="destaques">
      <h1 className="title-destaques">Calças</h1>
      <div className="container">
        <Link to="/" className="one">
          <img src={pants1} alt=""/>
          <p className="name-product">CALÇA JOGGER</p>
          <p className="pryce">R$ 250,90</p>
        </Link>
        <Link to="/" className="one">
          <img src={pants2} alt=""/>
          <p className="name-product">CALÇA ALFAIATARIA SLIM</p>
          <p className="pryce">R$ 500,00</p>
        </Link>
        <Link to="/" className="one">
          <img src={pants3} alt=""/>
          <p className="name-product">CALÇA ALFAIATARIA SLIM</p>
          <p className="pryce">R$ 500,00</p>
        </Link>
        <Link to="/" className="one">
          <img src={pants4} alt=""/>
          <p className="name-product">CALÇA JOGGER</p>
          <p className="pryce">R$ 279,90</p>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Home;