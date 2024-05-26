import React from 'react'
import Input from '../../components/Form/Input'
import Button from '../../components/Form/Button'

const EquipmentById = () => {
	return (
		<form method="GET" action="/buscar-equipamento-id">
			<h2>Busca de Equipamento pelo ID</h2>

			<Input id="getEqtoId" type="text" text="Id do Equipamento: " />

			<Button id="getEqtoId" text="Buscar Equipamento" action="algumaFunction()"/>
		</form>
	);
}

export default EquipmentById