import React from 'react';

function	Navbar({ onMenuItemClick }) {
	const handleItemClick = (pagina) => {
		onMenuItemClick(pagina);
	  };
	
	  return (
		<nav id="top-navbar">
			<ul>
				<li onClick={() => handleItemClick('home')}>Home</li>
				<li onClick={() => handleItemClick('calc')}>Lista de Pontos</li>
				<li onClick={() => handleItemClick('mngt')}>Gerenciador</li>
				<li onClick={() => handleItemClick('srch')}>Busca</li>
			</ul>
		</nav>
	);
}

export default Navbar;