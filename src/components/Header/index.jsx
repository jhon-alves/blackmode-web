import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import { Search, LocalMall } from '@material-ui/icons';

import logo from '../../assets/images/logo.svg';

function Header() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header__position">
      <div className="header">
        <header className="k-header">
          <div className="menu__mobile">
            <div className="icon__menu" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <Link to='/'>
              <img className="logo-mobile" src={logo} alt="logotipo"/>
            </Link>
            <LocalMall className="icon__bag" />
          </div>
          <Link to='/'>
            <img className="logo" src={logo} alt="logotipo"/>
          </Link>
          <div className="header__search">
            <input type="text" className="inp-search" placeholder="O que você está buscando?"/>
            <Search />
          </div>

          <nav className="nav-menu">
            <ul>
              <li>
                <Link to='/login' className="icon__login">
                  <ion-icon name="person-outline" />
                </Link>
              </li>
              <li>
                <Link className="icon__bag"> 
                  <ion-icon name="bag-outline" />
                </Link>  
              </li>
            </ul>
          </nav>     
        </header>
      </div>
      <nav className={click ? 'menu-category active' : 'menu-category'}>
      <ul>
        <li>
          <Link className="nav-links" to='/' onClick={closeMobileMenu}>
            Início
          </Link>
        </li>
        <li>
          <Link className="nav-links" to='/camisetas' onClick={closeMobileMenu}>
            Camisetas
          </Link>
        </li>
        <li>
          <Link className="nav-links" to='/moletons' onClick={closeMobileMenu}>
            Moletons
          </Link>
        </li>
        <li>
          <Link className="nav-links" to='/jaquetas' onClick={closeMobileMenu}>
            Jaquetas
          </Link>
        </li>
        <li>
          <Link className="nav-links" to='/calcas' onClick={closeMobileMenu}>
            Calças
          </Link>
        </li>
        <li>
          <Link className="nav-links" to='/acessorios' onClick={closeMobileMenu}>
            Acessórios
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Header;
