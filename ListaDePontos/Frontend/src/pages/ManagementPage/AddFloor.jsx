import React, { useState } from 'react';
import AddEquipment from './AddEquipment';

const AddFloor = () => {
    const [floors, setFloors] = useState([{
        id: `floorId-${Date.now()}`,
        floorId: '',
        floorName: ''
    }]);
    const [selectedAction, setSelectedAction] = useState('');
    const [showAddEquipment, setShowAddEquipment] = useState(false);

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newFloors = [...floors];
        newFloors[index][name] = value;
        setFloors(newFloors);
    };

    const handleAddFloor = () => {
        setFloors([...floors, {
            id: `floorId-${Date.now()}`,
            floorId: '',
            floorName: ''
        }]);
    };

    const handleRemoveFloor = index => {
        const newFloors = [...floors];
        newFloors.splice(index, 1);
        setFloors(newFloors);
    };

    const handleSave = () => {
        console.log('Floors:', floors);
    };

    const handleActionChange = (e) => {
        const action = e.target.value;
        setSelectedAction(action);
        setShowAddEquipment(action !== 'addFloor');
    };

    return (
        <div className='addFloor'>
            <h2>Cadastro de Novo Pavimento</h2>
            <form id="floorForm" action="/submit-form" method="POST" className="addFloorForm">
                <div className="floor-container">
                    <label> </label>
                    <label>ID</label>
                    <label>Nome</label>
                </div>
                {floors.map((floor, index) => (
                    <div key={floor.id} className="floor-line">
                        {index === 0 && (
                            <button type="button" onClick={handleAddFloor} className="add-floor">
                                <i className="fas fa-plus"></i>
                            </button>
                        )}
                        <input
                            type="text"
                            name="floorId"
                            value={floor.floorId}
                            onChange={event => handleInputChange(index, event)}
                            required
                        />
                        <input
                            type="text"
                            name="floorName"
                            value={floor.floorName}
                            onChange={event => handleInputChange(index, event)}
                            required
                        />
                        {index !== 0 && (
                            <button type="button" onClick={() => handleRemoveFloor(index)} className="delete-floor">
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        )}
                    </div>
                ))}
            </form>
            <button type="button" onClick={handleSave} className="save-floor">
                Salvar
            </button>
            {showAddEquipment && <AddEquipment floors={floors} />}
        </div>
    );
};

export default AddFloor;
