import React from 'react';
import Floor from './Floor';
import Button from '../../components/Form/Button';

function ModalFloors({ isVisible, numberOfFloors, onClose, addEqpto }) {
	if (!isVisible) return null;

	const renderFloors = () => {
		const floors = [];
		for (let i = 1; i <= numberOfFloors; i++) {
			floors.push(<Floor key={i} floorNumber={i} addEqpto={addEqpto} />);
		}
		return floors;
	};

	return (
		<div className="modal">
			<div className="modal-content">
				<form>
					<h2>Lista de Pontos Iniciada</h2>
					{renderFloors()}
				</form>
				<div id="closeWindow">
					<Button id="closeButton" text="Fechar" action={onClose} />
				</div>
			</div>
		</div>
	);
}

export default ModalFloors;