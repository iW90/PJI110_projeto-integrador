import React, { useState } from 'react';
import Button from '../../components/Form/Button';
import PointListInit from './PointListInit';
import PointListFloors from './PointListFloors';

function PointListPage() {
	const [isModalInitVisible, setModalInitVisible] = useState(false);
	const [numberOfFloors, setNumberOfFloors] = useState(1);

	const handleOpenModalInit = () => {
		setModalInitVisible(true);
	};

	const handleCloseModalInit = () => {
		setModalInitVisible(false);
	};

	const handleNextModalInit = () => {
		const client = document.getElementById('clientName').value;
		const floors = document.getElementById('qtddPvmto').value;
		setNumberOfFloors(parseInt(floors)); // Converte o número para inteiro e atualiza o estado
		setModalInitVisible(false);
	};

	return (
		<section id="pointlist-section">
			<h2>Lista de Pontos</h2>
			<p>Inicie uma nova lista</p>

			<Button id="addDevice" text="Iniciar Lista" action={handleOpenModalInit} />
			
			<PointListInit isVisible={isModalInitVisible} onClose={handleCloseModalInit} />

			{/* <PointListFloors numberOfFloors={numberOfFloors} /> */}
		</section>
	);
}

export default PointListPage;
