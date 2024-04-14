import React from 'react'
import Input from '../../components/Form/Input'
import Button from '../../components/Form/Button'

const DelEquipment = () => {
	return (
		<form method="DEL" action="/deletar-equipamento">
			<h2>Remoção de Equipamento Cadastrado</h2>

			<Input id="eqtoId" type="text" text="Id do Equipamento: " />

			<Button id="delEqto" text="Deletar Equipamento" action="algumaFunction()"/>
		</form>
	);
}

export default DelEquipment