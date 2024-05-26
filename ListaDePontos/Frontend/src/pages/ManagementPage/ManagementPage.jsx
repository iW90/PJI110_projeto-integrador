import React, { useState } from 'react';
import AddEquipment from './AddEquipment';
import DelEquipment from './DelEquipment';
import AltEquipment from './AltEquipment';
import AddFloor from './AddFloor';

function ManagementContent({ selectedAction, floors }) {
    switch (selectedAction) {
        case 'addFloor':
            return <AddFloor />;
        case 'addEqmto':
            return <AddEquipment floors={floors} />; // Pass floors as a prop
        case 'delEqmto':
            return <DelEquipment />;
        case 'altEqmto':
            return <AltEquipment />;
        default:
            return null;
    }
}

function ManagementPage({ floors }) {
    const [selectedAction, setSelectedAction] = useState('');

    const handleActionChange = (e) => {
        setSelectedAction(e.target.value);
    };

    return (
        <section id="management-section">
            <label htmlFor="managementActions" className="managementActions">
                <p>Selecione a ação desejada:</p>
            </label>
            <select
                id="managementActions"
                name="managementActions"
                value={selectedAction}
                onChange={handleActionChange}
            >
                <option value="" disabled>
                    Selecione uma opção
                </option>
                <option value="addFloor">Adicionar Pavimento</option>
                <option value="addEqmto">Cadastrar Equipamento</option>
                <option value="delEqmto">Excluir Equipamento</option>
                <option value="altEqmto">Alterar Equipamento</option>
            </select>

            <ManagementContent selectedAction={selectedAction} floors={floors} /> {/* Pass floors as a prop */}
        </section>
    );
}

export default ManagementPage;