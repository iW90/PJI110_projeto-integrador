import React, { useState } from 'react';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';

function ModalEquipment({ isVisible, onClose }) {
	if (!isVisible) return null;

	return (
		<div className="modal">
			<div className="modal-content">
				<form>
					<h2>Adicionar Equipamentos</h2>

					<Input id="epto" type="text" text="Nome do Equipamento:" value="" onChange="" />
					<Button id="addEqpto" text="Adicionar" action={onClose} />
				</form>
				<div id="closeWindow">
					<Button id="closeButton" text="Fechar" action={onClose} />
				</div>
			</div>
		</div>
	);
}

export default ModalEquipment;