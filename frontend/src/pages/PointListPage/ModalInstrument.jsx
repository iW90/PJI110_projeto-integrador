import React, { useState } from 'react';
import FormInstrument from './FormInstrument';
import Button from '../../components/Form/Button';
import CloseModal from '../../components/Modal/CloseModal';

function ModalInstrument({ isVisible, onClose }) {
	if (!isVisible) return null;

	const [instrumentCount, setInstrumentCount] = useState(1);

	const handleAddMoreInstr = () => {
		setInstrumentCount(instrumentCount + 1);
	};

	const renderInstrumentForms = () => {
		const forms = [];
		for (let i = 0; i < instrumentCount; i++) {
			forms.push(<FormInstrument key={i} />);
		}
		return forms;
	};

	return (
		<div className="modal">
			<div className="modal-content">
				<h2>Adicionar Instrumentos</h2>
				{renderInstrumentForms()}
				<div class="buttonsBlock">
					<Button id="addNewInstr" text="+" action={handleAddMoreInstr} />
					<Button id="backEqptos" text="Voltar" action={onClose} />
				</div>
				<CloseModal action={onClose} />
			</div>
		</div>
	);
}

export default ModalInstrument;