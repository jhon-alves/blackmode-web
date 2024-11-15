import React from 'react';
import './styles.css';

function SidebarFilter() {
  return (
    <div className="sidebar__filter">
      <h2>Tamanho</h2>
      <ul className="sidebar__filter__items">
        <li>
          <input type="checkbox" name="filtro" value="filtroAttrTAMANHO14:P" />
          <span>P</span>
        </li>
        <li>
          <input type="checkbox" name="filtro" value="filtroAttrTAMANHO14:P" />
          <span>M</span>
        </li>
        <li>
          <input type="checkbox" name="filtro" value="filtroAttrTAMANHO14:P" />
          <span>G</span>
        </li>
        <li>
          <input type="checkbox" name="filtro" value="filtroAttrTAMANHO14:P" />
          <span>GG</span>
        </li>
      </ul>

      <h2>Cor</h2>
      <ul className="sidebar__filter__items">
        <li>
          <input type="checkbox" name="filtro" value="filtroAttrTAMANHO14:P" />
          <span>Amarelo</span>
        </li>
        <li>
          <input type="checkbox" name="filtro" value="filtroAttrTAMANHO14:P" />
          <span>Azul</span>
        </li>
        <li>
          <input type="checkbox" name="filtro" value="filtroAttrTAMANHO14:P" />
          <span>Branco</span>
        </li>
        <li>
          <input type="checkbox" name="filtro" value="filtroAttrTAMANHO14:P" />
          <span>Preto</span>
        </li>
        <li>
          <input type="checkbox" name="filtro" value="filtroAttrTAMANHO14:P" />
          <span>Cinza</span>
        </li>
        <li>
          <input type="checkbox" name="filtro" value="filtroAttrTAMANHO14:P" />
          <span>Vinho</span>
        </li>
      </ul>
    </div>
  );
}

export default SidebarFilter;
