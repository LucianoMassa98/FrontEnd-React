import React from 'react';
import '../styles/Menu.scss';

const Menu = () => {
	return (
		<div class="desktop-menu">
		<ul>
		  <li>
			<a href="/" class="title">Mis ventas</a>
		  </li>
		  <li>
			<a href="/" class="title">Mis compras</a>
		  </li>
		  <li>
			<a href="/">Mi cuenta</a>
		  </li>
	
		  <li>
			<a href="/">Sign out</a>
		  </li>
		</ul>
	  </div>
	);
}

export default Menu;