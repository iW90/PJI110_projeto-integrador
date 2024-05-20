import React, { useState } from 'react';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';

function ModalInit({ isVisible, onClose, onNext }) {
	if (!isVisible) return null;

	const [clientName, setClientName] = useState('');
	const [numberOfFloors, setNumberOfFloors] = useState(1);

	const handleNext = () => {
		setNumberOfFloors(parseInt(numberOfFloors));
		onNext(clientName, numberOfFloors);
	};

	return (
		<div className="modal">
			<div className="modal-content">
				<form>
					<h2>Nova Lista de Pontos</h2>

					<Input id="clientName" type="text" text="Nome do Cliente:" value={clientName} onChange={(e) => setClientName(e.target.value)} />
					<Input id="qtddPvmto" type="text" text="Quantidade de Pavimentos:" value={numberOfFloors} onChange={(e) => setNumberOfFloors(e.target.value)} />

					<Button id="nextButton" text="Próximo" action={handleNext} />
				</form>
				<div id="closeWindow">
					<Button id="closeButton" text="Fechar" action={onClose} />
				</div>
			</div>
		</div>
	);
}

export default ModalInit;