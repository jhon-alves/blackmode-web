import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import { Facebook, Instagram, MailOutline, WhatsApp } from '@material-ui/icons';

function Footer() {
  return(
    <>
    <div className="footer">
      <div className="footer__links">
          <div className="footer-link-items">
            <h2>Informações</h2>
            <Link to='/troca-e-devolucoes'>Trocas e devoluções</Link>
            <Link to='/perguntas-frequentes'>Perguntas Frequentes</Link>
            <a href="/frete-gratis">Tudo sobre Frete Grátis</a>
          </div>
          <div className="footer-link-items">
            <h2>Entre em contato</h2>
            <a href="/" className="icon__edit"><MailOutline />contato@blackmode.com.br</a>
            <a href="/" className="icon__edit"><WhatsApp />11 98250-8239</a>
          </div>
          <div className="footer-link-items">
            <h2>Redes Sociais</h2>
            <div className="list__social">
              <Facebook />
              <Instagram />
            </div>
          </div>
        </div>
    </div>

    <div className="copy">
      <div className="content-copy">
        <p>Copyright Black Mode 2020. Todos os direitos reservados.</p>
        <span>By<a href="https://jhowalves.com.br/"> JhowAlves</a></span>
      </div>
    </div>
    </>
  );
}

export default Footer;