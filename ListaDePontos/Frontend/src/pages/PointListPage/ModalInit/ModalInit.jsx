import React, { useState } from 'react';
import InputV2 from '../../../components/Form/InputV2';
import ModalCloseButton from '../../../components/Modal/ModalCloseButton';

const ModalInit = ({ isVisible, onClose, onNext }) => {
    const [clientName, setClientName] = useState('');
    const [floors, setFloors] = useState([
        {
            id: `floorId-${Date.now()}`,
            floorId: '',
            floorName: ''
        }
    ]);

    if (!isVisible) return null;

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newFloors = [...floors];
        newFloors[index][name] = value;
        setFloors(newFloors);
    };

    const handleAddFloor = () => {
        setFloors([
            ...floors,
            {
                id: `floorId-${Date.now()}`,
                floorId: '',
                floorName: ''
            }
        ]);
    };

    const handleRemoveFloor = index => {
        const newFloors = [...floors];
        newFloors.splice(index, 1);
        setFloors(newFloors);
    };

    const handleSave = e => {
        e.preventDefault();
        onNext(clientName, floors);
    };

    const isNextButtonDisabled =
        !clientName ||
        floors.some(floor => !floor.floorId || !floor.floorName);

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Nova Lista de Pontos</h2>
                <form onSubmit={handleSave} className="addFloorForm">
                    <div className="client-container">
                        <label htmlFor="clientName">Nome do Cliente:</label>
                        <InputV2
                            id="clientName"
                            type="text"
                            value={clientName}
                            onChange={e => setClientName(e.target.value)}
                        />
                    </div>
                    <h3>Pavimentos:</h3>
                    <div className="floor-container">
                        <div className="floor-labels">
                            <label className="blankLabel"> </label>
                            <label className="floorIdLabel">ID</label>
                            <label className="floorNameLabel">Nome</label>
                        </div>
                        {floors.map((floor, index) => (
                            <div key={floor.id} className="floor-line">
                                <input
                                    type="text"
                                    name="floorId"
                                    value={floor.floorId}
                                    onChange={event =>
                                        handleInputChange(index, event)
                                    }
                                    required
                                />
                                <input
                                    type="text"
                                    name="floorName"
                                    value={floor.floorName}
                                    onChange={event =>
                                        handleInputChange(index, event)
                                    }
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={handleAddFloor}
                                    className="add-floor"
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                                {index !== 0 && (
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveFloor(index)}
                                        className="delete-floor"
                                    >
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                    <button
                        id="nextButton"
                        className="nextButton"
                        type="submit"
                        disabled={isNextButtonDisabled}
                    >
                        Próximo
                    </button>
                </form>
                <ModalCloseButton action={onClose} />
            </div>
        </div>
    );
};

export default ModalInit;
