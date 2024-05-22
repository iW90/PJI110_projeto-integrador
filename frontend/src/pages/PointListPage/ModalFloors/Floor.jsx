import React from 'react';
import Button from '../../../components/Form/Button';

function Floor({ floorNumber, addEqpto }) {
	const handleAddEqpto = (event) => {
		event.preventDefault();
		addEqpto();
	};

	return (
		<div>
			<h3>Pavimento {floorNumber}</h3>
			<div className="pavement-content">
				<form onSubmit={handleAddEqpto}>
					<h4>Elétrica</h4>
					<Button id="addEqpto" text="Adicionar Equipamento" action={handleAddEqpto} />
				</form>
				<form onSubmit={handleAddEqpto}>
					<h4>Hidráulica</h4>
					<Button id="addEqpto" text="Adicionar Equipamento" action={handleAddEqpto} />
				</form>
				<form onSubmit={handleAddEqpto}>
					<h4>HVAC</h4>
					<Button id="addEqpto" text="Adicionar Equipamento" action={handleAddEqpto} />
				</form>
			</div>
		</div>
	);
}

export default Floor;