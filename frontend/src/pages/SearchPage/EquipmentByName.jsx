import React from 'react'
import Input from '../../components/Form/Input'
import Button from '../../components/Form/Button'

const EquipmentByName = () => {
	return (
		<form method="GET" action="/buscar-equipamento-name">
			<h2>Busca de Equipamento pelo Nome</h2>

			<Input id="deviceId" type="text" text="Nome do Equipamento:" />

			<Button id="addDevice" text="Buscar Equipamento" action="algumaFunction()"/>
		</form>
	);
}

export default EquipmentByName