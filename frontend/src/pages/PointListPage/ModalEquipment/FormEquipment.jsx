import React from 'react';
import Button from '../../../components/Form/Button';
import Input from '../../../components/Form/Input';

function FormEquipment({ addInstr }) {
	const handleAddInstr = (event) => {
		event.preventDefault();
		addInstr();
	};

	return (
		<form class="modal-form-equipment">
			<Input id="epto" type="text" text="Nome do Equipamento:" value="" onChange="" />

			<Button id="addInstr" text="Instrumentos" action={handleAddInstr} />
		</form>
	);
}

export default FormEquipment;