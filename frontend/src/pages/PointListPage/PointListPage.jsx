import React, { useState } from 'react';
import Button from '../../components/Form/Button';
import ModalInit from './ModalInit';
import ModalFloors from './ModalFloors';
import ModalEquipment from './ModalEquipment';
import ModalInstrument from './ModalInstrument';

function PointListPage() {
	const [isModalInitVisible, setModalInitVisible] = useState(false);
	const [isModalFloorVisible, setModalFloorVisible] = useState(false);
	const [isModalEquipmentVisible, setModalEquipmentVisible] = useState(false);
	const [isModalInstrumentVisible, setModalInstrumentVisible] = useState(false);
	const [numberOfFloors, setNumberOfFloors] = useState(1);

	/* Create Payload to backend */
	function createPayload(clientName, floors) {
		const payload = {
			clientName: clientName,
			floors: floors.map((floorNumber) => ({
				floor: floorNumber,
				disciplines: {
					HVAC: {
						equipmentList: [
							{
								instrumentList: []
							}
						]
					},
					Hidraulica: {
						equipmentList: [
							{
								instrumentList: []
							}
						]
					},
					Eletrica: {
						equipmentList: [
							{
								instrumentList: []
							}
						]
					}
				}
			}))
		};
	
		return payload;
	}

	/* Init Functions */
	const handleOpenModalInit = () => {
		setModalInitVisible(true);
	};

	const handleCloseModalInit = () => {
		setModalInitVisible(false);
	};

	const handleNextModalInit = () => {
		const client = document.getElementById('clientName').value;
		const floors = document.getElementById('qtddPvmto').value;
		setNumberOfFloors(parseInt(floors)); // Atualiza o total de pavimentos
		setModalInitVisible(false);
		setModalFloorVisible(true);
	};

	/* Floors Modal Functions */
	const handleCloseModalFloor = () => {
		setModalFloorVisible(false);
	};

	/* Equipment Modal Functions */
	const handleOpenModalEquipment = () => {
		setModalEquipmentVisible(true);
	};

	const handleCloseModalEquipment = () => {
		setModalEquipmentVisible(false);
	};

	/* Instrument Modal Functions */
	const handleOpenModalInstrument = () => {
		setModalInstrumentVisible(true);
	};

	const handleCloseModalInstrument = () => {
		setModalInstrumentVisible(false);
	};

	/* Page */
	return (
		<section id="pointlist-section">
			<h2>Lista de Pontos</h2>
			<p>Inicie uma nova lista</p>

			<Button id="addDevice" text="Iniciar Lista" action={handleOpenModalInit} />
			
			<ModalInit isVisible={isModalInitVisible} onClose={handleCloseModalInit} onNext={handleNextModalInit} />
			<ModalFloors isVisible={isModalFloorVisible} numberOfFloors={numberOfFloors} onClose={handleCloseModalFloor} addEqpto={handleOpenModalEquipment} />
			<ModalEquipment isVisible={isModalEquipmentVisible} onClose={handleCloseModalEquipment} />
			<ModalInstrument isVisible={isModalInstrumentVisible} onClose={handleCloseModalInstrument} />
		</section>
	);
}

export default PointListPage;
