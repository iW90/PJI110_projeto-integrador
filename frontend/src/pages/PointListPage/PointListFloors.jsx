import React from 'react';
import Floor from './Floor';

function PointListFloors({ numberOfFloors }) {
	const renderFloors = () => {
		const floors = [];
		for (let i = 1; i <= numberOfFloors; i++) {
			floors.push(<Floor key={i} floorNumber={i} />);
		}
		return floors;
	};

	return (
		<div className="modal">
			<div className="modal-content">
				<h2>Lista de Pontos</h2>
				{renderFloors()}
			</div>
		</div>
	);
}

export default PointListFloors;