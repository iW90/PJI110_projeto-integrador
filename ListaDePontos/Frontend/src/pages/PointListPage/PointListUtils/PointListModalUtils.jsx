export function nextModalInit(clientName, numberOfFloors, floorData, setNumberOfFloors, setModalInitVisible, setModalFloorVisible) {
    // Do whatever you need to do with the client name, number of floors, and floor data
    console.log('Client Name:', clientName);
    console.log('Number of Floors:', numberOfFloors);
    console.log('Floor Data:', floorData);

    // Update the number of floors state
    setNumberOfFloors(numberOfFloors);

    // Set visibility of modal components
    setModalInitVisible(false);
    setModalFloorVisible(true);
}

export function closeModal(setModalVisible) {
	setModalVisible(false);
}

export function openModal(setModalVisible) {
	setModalVisible(true);
}