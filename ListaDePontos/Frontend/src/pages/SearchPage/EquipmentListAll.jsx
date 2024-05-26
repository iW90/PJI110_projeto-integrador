import React from 'react'
import Button from '../../components/Form/Button'

const EquipmentListAll = () => {
	return (
		<form method="GET" action="/buscar-equipamentos">
			<h2>Lista todos os Equipamentos Cadastrados</h2>

			<Button id="getAllEqto" text="Buscar Equipamentos" action="algumaFunction()"/>
		</form>
	);
}

export default EquipmentListAll