import { useState } from 'react';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import Footer from './components/Footer'
import './App.css';

//count = variável
//setCount = função que altera var
//pesquisar: contextApi / redux
function App() {
	const [pagina, setPagina] = useState('home');

	const handleMenuClick = (pagina) => {
		setPagina(pagina);
	};

	return (
		<>
		<header>
			<Navbar onMenuItemClick={handleMenuClick} />
		</header>

		<main>
			<PageContent pagina={pagina} />
		</main>

		<footer>
			<Footer />
		</footer>
		</>
	);
}

export default App;
