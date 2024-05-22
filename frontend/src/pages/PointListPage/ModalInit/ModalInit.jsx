import React, { useState } from 'react';
import InputV2 from '../../../components/Form/InputV2';
import ModalCloseButton from '../../../components/Modal/ModalCloseButton';

function ModalInit({ isVisible, onClose, onNext }) {
	if (!isVisible) return null;

	const [clientName, setClientName] = useState('');
	const [numberOfFloors, setNumberOfFloors] = useState(1);

	const handleNext = () => {
		setNumberOfFloors(parseInt(numberOfFloors));
		onNext(clientName, numberOfFloors);
	};

	const isNextButtonDisabled = !clientName || !numberOfFloors;

	return (
		<div className="modal">
			<div className="modal-content">
				<h2>Nova Lista de Pontos</h2>
				<form>
					<InputV2 
						id="clientName" 
						type="text" 
						text="Nome do Cliente:" 
						value={clientName} 
						onChange={(e) => setClientName(e.target.value)} 
					/>
					<InputV2 
						id="qtddPvmto" 
						type="number" 
						text="Quantidade de Pavimentos:" 
						value={numberOfFloors} 
						onChange={(e) => setNumberOfFloors(e.target.value)} 
					/>

					<button id="nextButton" onClick={handleNext} disabled={isNextButtonDisabled}>Próximo</button>
				</form>
				<ModalCloseButton action={onClose} />
			</div>
		</div>
	);
}

export default ModalInit;