import React, { useState } from 'react';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import CloseModal from '../../components/Modal/CloseModal';

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
				<CloseModal action={onClose} />
			</div>
		</div>
	);
}

export default ModalEquipment;