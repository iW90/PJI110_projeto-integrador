import React, { useState } from 'react';
import FormEquipment from './FormEquipment';
import Button from '../../../components/Form/Button';
import ModalCloseButton from '../../../components/Modal/ModalCloseButton';

function ModalEquipment({ isVisible, onClose, addInstr }) {
	if (!isVisible) return null;

	const [equipmentCount, setEquipmentCount] = useState(1);

	const handleAddMoreEqpto = () => {
		setEquipmentCount(equipmentCount + 1);
	};
	
	const renderEquipmentForms = () => {
		const forms = [];
		for (let i = 0; i < equipmentCount; i++) {
			forms.push(<FormEquipment key={i} addInstr={addInstr} />);
		}
		return forms;
	};

	return (
		<div className="modal">
			<div className="modal-content">
				<h2>Adicionar Equipamentos</h2>
				{renderEquipmentForms()}
				<div class="buttonsBlock">
					<Button id="addMoreEqpto" text="+" action={handleAddMoreEqpto} />
					<Button id="backFloors" text="Voltar" action={onClose} />
				</div>
				<ModalCloseButton action={onClose} />
			</div>
		</div>
	);
}

export default ModalEquipment;