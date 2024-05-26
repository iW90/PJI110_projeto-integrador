import React, { useState } from 'react';
import Button from '../../components/Form/Button';
import ModalInit from './ModalInit/ModalInit';
import ModalFloors from './ModalFloors/ModalFloors';
import ModalEquipment from './ModalEquipment/ModalEquipment';
import ModalInstrument from './ModalInstrument/ModalInstrument';
import {
    openModal,
    closeModal
} from './PointListUtils/PointListModalUtils';

function PointListPage() {
    const [isModalInitVisible, setModalInitVisible] = useState(false);
    const [isModalFloorVisible, setModalFloorVisible] = useState(false);
    const [isModalEquipmentVisible, setModalEquipmentVisible] = useState(false);
    const [isModalInstrumentVisible, setModalInstrumentVisible] = useState(false);

    const [clientData, setClientData] = useState({ clientName: '', floors: [] });

    const handleNextInit = (clientName, floors) => {
        setClientData({ clientName, floors });
        setModalInitVisible(false);
        setModalFloorVisible(true);
    };

    return (
        <section id="pointlist-section">
            <h2>Lista de Pontos</h2>
            <p>Inicie uma nova lista</p>

            <Button id="addDevice" text="Iniciar Lista" action={() => openModal(setModalInitVisible)} />

            <ModalInit
                isVisible={isModalInitVisible}
                onClose={() => closeModal(setModalInitVisible)}
                onNext={handleNextInit}
            />
            <ModalFloors
                isVisible={isModalFloorVisible}
                onClose={() => closeModal(setModalFloorVisible)}
                addEqpto={() => openModal(setModalEquipmentVisible)}
                clientData={clientData}
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
