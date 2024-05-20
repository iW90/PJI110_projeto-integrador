import React, { useState } from 'react';
import InstrumentById from './InstrumentById';
import InstrumentByName from './InstrumentByName';
import InstrumentListAll from './InstrumentListAll';
import EquipmentById from './EquipmentById';
import EquipmentByName from './EquipmentByName';
import EquipmentListAll from './EquipmentListAll';

// Componente de Conteúdo
function SearchContent({ selectedAction }) {
	switch (selectedAction) {
		case 'srchEqtoId':
			return <EquipmentById />;
		case 'srchEqtoName':
			return <InstrumentById />;
		case 'listAllEqto':
			return <EquipmentListAll />;
		case 'srchInstId':
			return <EquipmentByName />;
		case 'srchInstName':
			return <InstrumentByName />;
		case 'listAllInst':
			return <InstrumentListAll />;
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
		<section id="search-section">
			<label htmlFor="managementActions" className="managementActions">
				<p>Selecione o tipo de busca desejada: </p>
				<select id="managementActions" name="managementActions" onChange={handleActionChange}>
					<option value="" disabled selected>Selecione uma opção</option>
					<option value="srchInstId">Buscar Instrumento pelo id</option>
					<option value="srchEqtoId">Buscar Equipamento pelo id</option>
					<option value="srchInstName">Buscar Instrumentos pelo nome</option>
					<option value="srchEqtoName">Buscar Equipamentos pelo nome</option>
					<option value="listAllInst">Buscar Lista de Instrumentos</option>
					<option value="listAllEqto">Buscar Lista de Equipamentos</option>
				</select>
			</label>

			<SearchContent selectedAction={selectAction} />
		</section>
	);
}

export default SearchPage;
