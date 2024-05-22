export function nextModalInit(setNumberOfFloors, setModalInitVisible, setModalFloorVisible) {
	const client = document.getElementById('clientName').value;
	const floors = document.getElementById('qtddPvmto').value;
	setNumberOfFloors(parseInt(floors));
	setModalInitVisible(false);
	setModalFloorVisible(true);
}

export function openModalInit(setModalInitVisible) {
	setModalInitVisible(true);
}

export function openModalEquipment(setModalEquipmentVisible) {
	setModalEquipmentVisible(true);
}

export function openModalInstrument(setModalInstrumentVisible) {
	setModalInstrumentVisible(true);
}

export function closeModal(setModalVisible) {
	setModalVisible(false);
}

export function openModal(setModalVisible) {
	setModalVisible(true);
}