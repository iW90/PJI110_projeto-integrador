import React from 'react';
import Button from '../../../components/Form/Button';
import ModalCloseButton from '../../../components/Modal/ModalCloseButton';

const ModalFloors = ({ isVisible, onClose, addEqpto, clientData }) => {
    if (!isVisible) return null;

    const renderFloors = () => {
        return clientData.floors.map((floor, index) => (
            <div key={index}>
                <h3>Pavimento {index + 1}</h3>
                <div className="pavement-content">
                    <p>ID: {floor.floorId}</p>
                    <p>Nome: {floor.floorName}</p>
                    <Button id="addEqpto" text="Adicionar Equipamento" action={addEqpto} />
                </div>
            </div>
        ));
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Lista de Pontos Iniciada</h2>
                <h3>Nome do Cliente: {clientData.clientName}</h3>
                {renderFloors()}
                <ModalCloseButton action={onClose} />
            </div>
        </div>
    );
};

export default ModalFloors;
