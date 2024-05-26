import React, { useState } from 'react';
import AddEquipment from './AddEquipment';

const AddFloor = () => {
    const [floors, setFloors] = useState([]);
    const [selectedAction, setSelectedAction] = useState('');
    const [showAddEquipment, setShowAddEquipment] = useState(false);

    const handleAddFloor = () => {
        // Function to handle adding a new floor input line
        const container = document.querySelector('#floorForm');

        const newInputs = [
            { id: `floorId-${Date.now()}`, name: 'floorId', required: true },
            { id: `floorName-${Date.now()}`, name: 'floorName', required: true }
        ];

        const rowIndex = container.querySelectorAll('input[name="floorId"]').length + 1;

        const newFloor = { id: `floorId-${Date.now()}`, name: '', required: true };

        newInputs.forEach((inputData, index) => {
            const newInput = document.createElement('input');
            newInput.setAttribute('id', inputData.id);
            newInput.setAttribute('name', inputData.name);
            if (inputData.required) {
                newInput.setAttribute('required', '');
            }
            newInput.style.gridColumn = index + 2;
            newInput.style.gridRow = rowIndex + 1;
            container.appendChild(newInput);

            // Add floor information to newFloor object
            newFloor[inputData.name] = ''; // Initialize with empty string
        });

        setFloors(prevFloors => [...prevFloors, newFloor]);

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.className = 'delete-floor';
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.style.gridColumn = newInputs.length + 2;
        deleteButton.style.gridRow = rowIndex + 1;
        deleteButton.onclick = () => {
            newInputs.forEach(inputData => {
                const input = document.getElementById(inputData.id);
                container.removeChild(input);
            });
            container.removeChild(deleteButton);
        };
        container.appendChild(deleteButton);
    };

    // Function to handle saving floor information
    const handleSave = () => {
        // Send floor information to the server
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
                <div className="floor-inputs">
                    <label htmlFor="floorId">ID</label>
                    <input id="floorId" name="floorId" required />
                    <label htmlFor="floorName">Nome</label>
                    <input id="floorName" name="floorName" required />
                </div>
                <button type="button" onClick={handleAddFloor} className="add-floor">
                    <i className="fas fa-plus"></i>
                </button>
            </form>
            <button type="button" onClick={handleSave} className="save-floor">
                Salvar
            </button>
            {/* Only render AddEquipment if showAddEquipment is true */}
            {showAddEquipment && <AddEquipment floors={floors} />}
        </div>
    );
};

export default AddFloor;
