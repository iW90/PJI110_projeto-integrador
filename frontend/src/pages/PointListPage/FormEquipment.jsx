import React from 'react';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';

function FormEquipment() {
	return (
		<form class="modal-form-equipment">
			<Input id="epto" type="text" text="Nome do Equipamento:" value="" onChange="" />
			<Button id="addInstr" text="Instrumentos" action="" />
		</form>
	);
}

export default FormEquipment;