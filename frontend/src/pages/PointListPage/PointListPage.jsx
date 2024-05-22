// PointListPage.jsx
import React, { useState } from 'react';
import Button from '../../components/Form/Button';
import ModalInit from './ModalInit/ModalInit';
import ModalFloors from './ModalFloors/ModalFloors';
import ModalEquipment from './ModalEquipment/ModalEquipment';
import ModalInstrument from './ModalInstrument/ModalInstrument';
import { createPayload } from './PointListUtils/PointListPayload';
import {
	nextModalInit,
	openModal,
	closeModal
} from './PointListUtils/PointListModalUtils';

function PointListPage() {
	const [isModalInitVisible, setModalInitVisible] = useState(false);
	const [isModalFloorVisible, setModalFloorVisible] = useState(false);
	const [isModalEquipmentVisible, setModalEquipmentVisible] = useState(false);
	const [isModalInstrumentVisible, setModalInstrumentVisible] = useState(false);
	const [numberOfFloors, setNumberOfFloors] = useState(1);

	return (
		<section id="pointlist-section">
			<h2>Lista de Pontos</h2>
			<p>Inicie uma nova lista</p>

			<Button id="addDevice" text="Iniciar Lista" action={() => openModal(setModalInitVisible)} />

			<ModalInit 
				isVisible={isModalInitVisible} 
				onClose={() => closeModal(setModalInitVisible)} 
				onNext={() => nextModalInit(setNumberOfFloors, setModalInitVisible, setModalFloorVisible)} 
			/>
			<ModalFloors 
				isVisible={isModalFloorVisible} 
				numberOfFloors={numberOfFloors} 
				onClose={() => closeModal(setModalFloorVisible)} 
				addEqpto={() => openModal(setModalEquipmentVisible)} 
			/>
			<ModalEquipment 
				isVisible={isModalEquipmentVisible} 
				onClose={() => closeModal(setModalEquipmentVisible)} 
				addInstr={() => openModal(setModalInstrumentVisible)} 
			/>
			<ModalInstrument 
				isVisible={isModalInstrumentVisible} 
				onClose={() => closeModal(setModalInstrumentVisible)} 
			/>
		</section>
	);
}

export default PointListPage;