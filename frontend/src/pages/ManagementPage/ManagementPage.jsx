import React, { useState } from 'react';
import AddInstrument from './AddInstrument';
import DelInstrument from './DelInstrument';
import AltInstrument from './AltInstrument';
import AddEquipment from './AddEquipment';
import DelEquipment from './DelEquipment';
import AltEquipment from './AltEquipment';

// Componente de Conteúdo
function ManagementContent({ selectedAction }) {
	switch (selectedAction) {
		case 'addItmto':
			return <AddInstrument />;
		case 'delItmto':
			return <DelInstrument />;
		case 'altItmto':
			return <AltInstrument />;
		case 'addEqmto':
			return <AddEquipment />;
		case 'delEqmto':
			return <DelEquipment />;
		case 'altEqmto':
			return <AltEquipment />;
		default:
			return null;
	}
}

function ManagementPage() {
	const [selectAction, setSelectAction] = useState('');

	const handleActionChange = (e) => {
		setSelectAction(e.target.value);
	};

	return (
		<div>
			<label htmlFor="managementActions">
				<p>Selecione a ação desejada: </p>
				<select id="managementActions" name="managementActions" onChange={handleActionChange}>
					<option value="" disabled selected>Default</option>
					<option value="addItmto">Cadastrar Instrumento</option>
					<option value="delItmto">Excluir Instrumento</option>
					<option value="altItmto">Alterar Instrumento</option>
					<option value="addEqmto">Cadastrar Equipamento</option>
					<option value="delEqmto">Excluir Equipamento</option>
					<option value="altEqmto">Alterar Equipamento</option>
				</select>
			</label>

			<ManagementContent selectedAction={selectAction} />
		</div>
	);
}

export default ManagementPage;
