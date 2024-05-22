import React from 'react';
import Floor from './Floor';
import ModalCloseButton from '../../../components/Modal/ModalCloseButton';

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
				<ModalCloseButton action={onClose} />
			</div>
		</div>
	);
}

export default ModalFloors;