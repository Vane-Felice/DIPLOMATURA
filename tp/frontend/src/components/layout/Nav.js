import React from "react";
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <nav>
      <ul >
        <li><Link to= '/'>Home</Link></li>
        <li><Link to='noticias'>Noticias</Link></li>
        <li><Link to='nosotros'>Nosotros</Link></li>
        <li><Link to='contacto'>Contacto</Link></li>
      </ul>
    </nav>
  );
}
export default Nav;