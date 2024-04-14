import React from 'react'
import Input from '../../components/Form/Input'
import Button from '../../components/Form/Button'

const AltEquipment = () => {
	return (
		<form method="PUT" action="/alterar-equipamento">
			<h2>Alteração de Equipamento Cadastrado</h2>

			<Input id="eqtoId" type="text" text="Id:" />
			<Input id="eqtoName" type="text" text="Nome:" />
			<Input id="eqtoDescription" type="text" text="Descrição:" />

			<Button id="altEqto" text="Alterar Equipamento" action="algumaFunction()"/>
		</form>
	);
}

export default AltEquipment