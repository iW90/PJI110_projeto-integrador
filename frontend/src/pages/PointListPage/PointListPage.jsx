import React from 'react';
import Button from '../../components/Form/Button';

function	PointListPage() {
	return (
		<section id="pointlist-section">
			<h2>Lista de Pontos</h2>
			<p>Inicie uma nova lista</p>

			<Button id="addDevice" text="Iniciar Lista" action="algumaFunction()"/>

		</section>
	);
}

export default PointListPage;