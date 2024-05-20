import React, { useState } from 'react';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';

function ModalInstrument({ isVisible, onClose }) {
	if (!isVisible) return null;

	return (
		<div className="modal">
			<div className="modal-content">
				<form>
					<h2>Adicionar Instrumentos</h2>

					<Input id="inst" type="text" text="Nome do Instrumento:" value="" onChange="" />
					<Input id="ea" type="number" text="Total de Entradas Analógicas:" value="" onChange="" />
					<Input id="ed" type="number" text="Total de Entradas Digitais:" value="" onChange="" />
					<Input id="sa" type="number" text="Total de Saídas Analógicas:" value="" onChange="" />
					<Input id="sd" type="number" text="Total de Saídas Digitais:" value="" onChange="" />
					<Button id="addInstr" text="Adicionar" action={onClose} />
				</form>
				<div id="closeWindow">
					<Button id="closeButton" text="Fechar" action={onClose} />
				</div>
			</div>
		</div>
	);
}

export default ModalInstrument;