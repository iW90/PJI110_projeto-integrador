import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import Footer from './components/Footer';
import './App.css';

function App() {
	const [floors, setFloors] = useState([]); // State for floors
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
			<PageContent floors={floors} setFloors={setFloors} /> {/* Pass floors and setFloors as props */}
			<PageContent pagina={pagina} />
		</main>

		<footer>
			<Footer />
		</footer>
		</>
	);
}

export default App;