import React, { useState } from 'react';
import InstrumentByName from './InstrumentByName';
import InstrumentById from './InstrumentById';
import EquipmentByName from './EquipmentByName';
import EquipmentById from './EquipmentById';

// Componente de Conteúdo
function SearchContent({ selectedAction }) {
	switch (selectedAction) {
		case 'srchInstName':
			return <InstrumentByName />;
		case 'srchEqtoName':
			return <InstrumentById />;
		case 'srchInstId':
			return <EquipmentByName />;
		case 'srchEqtoId':
			return <EquipmentById />;
		default:
			return null;
	}
}

function SearchPage() {
	const [selectAction, setSelectAction] = useState('');

	const handleActionChange = (e) => {
		setSelectAction(e.target.value);
	};

	return (
		<div>
			<label htmlFor="managementActions">
				<p>Selecione o tipo de busca desejada: </p>
				<select id="managementActions" name="managementActions" onChange={handleActionChange}>
					<option value="" disabled selected>Default</option>
					<option value="srchInstName">Buscar Instrumento pelo nome</option>
					<option value="srchEqtoName">Buscar Equipamento pelo nome</option>
					<option value="srchInstId">Buscar Instrumento pelo id</option>
					<option value="srchEqtoId">Buscar Equipamento pelo id</option>
				</select>
			</label>

			<SearchContent selectedAction={selectAction} />
		</div>
	);
}

export default SearchPage;
