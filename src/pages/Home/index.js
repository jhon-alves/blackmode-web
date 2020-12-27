import React, { useEffect } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import Whatsapp from '../../components/Whatsapp';
import Slide from '../../components/Slide';
import Informative from '../../components/Informative';
        

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return(
    <>
    <Whatsapp />
    <Slide />
    <Informative />

    <div className="destaques">
      <h1 className="title-destaques first">Destaques</h1>
      <div className="container">
        <Link to="/camiseta-regular" className="one">
          <img src="images/camiseta01.png" alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 139,99</p>
        </Link>
        <Link to="/" className="one">
          <img src="images/camiseta02.png" alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 109,99</p>
        </Link>
        <Link to="/" className="one">
          <img src="images/camiseta03.png" alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 120,00</p>
        </Link>
        <Link to="/" className="one">
          <img src="images/camiseta04.png" alt=""/>
          <p className="name-product">CAMISETA REGULAR</p>
          <p className="pryce">R$ 90,00</p>
        </Link>
      </div>
    </div>

    <div className="destaques">
      <h1 className="title-destaques">Moletons</h1>
      <div className="container">
        <Link to="/" className="one">
          <img src="images/moleton01.png" alt=""/>
          <p className="name-product">MOLETOM CANGURU</p>
          <p className="pryce">R$ 299,90</p>
        </Link>
        <Link to="/" className="one">
          <img src="images/moleton02.png" alt=""/>
          <p className="name-product">MOLETOM CANGURU</p>
          <p className="pryce">R$ 250,90</p>
        </Link>
        <Link to="/" className="one">
          <img src="images/moleton03.png" alt=""/>
          <p className="name-product">MOLETOM CANGURU</p>
          <p className="pryce">R$ 200,90</p>
        </Link>
        <Link to="/" className="one">
          <img src="images/moleton04.png" alt=""/>
          <p className="name-product">MOLETOM CANGURU</p>
          <p className="pryce">R$ 299,90</p>
        </Link>
      </div>
    </div>

    <div className="destaques">
      <h1 className="title-destaques">Jaquetas</h1>
      <div className="container">
        <Link to="/" className="one">
          <img src="images/jaqueta01.png" alt=""/>
          <p className="name-product">JAQUETA COTELÊ TRADICIONAL</p>
          <p className="pryce">R$ 600,00</p>
        </Link>
        <Link to="/" className="one">
          <img src="images/jaqueta02.png" alt=""/>
          <p className="name-product">JAQUETA COTELÊ TRADICIONAL</p>
          <p className="pryce">R$ 600,00</p>
        </Link>
        <Link to="/" className="one">
          <img src="images/jaqueta03.png" alt=""/>
          <p className="name-product">JAQUETA JEANS</p>
          <p className="pryce">R$ 800,00</p>
        </Link>
        <Link to="/" className="one">
          <img src="images/jaqueta04.png" alt=""/>
          <p className="name-product">JAQUETA SARJA TRADICIONAL</p>
          <p className="pryce">R$ 550,00</p>
        </Link>
      </div>
    </div>

    <div className="destaques">
      <h1 className="title-destaques">Calças</h1>
      <div className="container">
        <Link to="/" className="one">
          <img src="images/calca01.png" alt=""/>
          <p className="name-product">CALÇA JOGGER</p>
          <p className="pryce">R$ 250,90</p>
        </Link>
        <Link to="/" className="one">
          <img src="images/calca02.png" alt=""/>
          <p className="name-product">CALÇA ALFAIATARIA SLIM</p>
          <p className="pryce">R$ 500,00</p>
        </Link>
        <Link to="/" className="one">
          <img src="images/calca03.png" alt=""/>
          <p className="name-product">CALÇA ALFAIATARIA SLIM</p>
          <p className="pryce">R$ 500,00</p>
        </Link>
        <Link to="/" className="one">
          <img src="images/calca04.png" alt=""/>
          <p className="name-product">CALÇA JOGGER</p>
          <p className="pryce">R$ 279,90</p>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Home;