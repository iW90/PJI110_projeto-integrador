import React, { useState } from 'react';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';

function PointListInit({ isVisible, onClose }) {
	const [clientName, setClientName] = useState('');
	const [numberOfFloors, setNumberOfFloors] = useState(1);

	const handleNext = () => {
		setNumberOfFloors(parseInt(numberOfFloors));
		onNext(clientName, numberOfFloors);
	};

	if (!isVisible) return null;

	return (
		<div className="modal">
			<div className="modal-content">
				<form>
					<h2>Nova Lista de Pontos</h2>

					<Input id="clientName" type="text" text="Nome do Cliente:" value={clientName} onChange={(e) => setClientName(e.target.value)} />
					<Input id="qtddPvmto" type="text" text="Quantidade de Pavimentos:" value={numberOfFloors} onChange={(e) => setNumberOfFloors(e.target.value)} />

					<Button id="saveButton" text="Próximo" action={handleNext} />
					<Button id="closeButton" text="Fechar" action={onClose} />
				</form>
			</div>
		</div>
	);
}

export default PointListInit;