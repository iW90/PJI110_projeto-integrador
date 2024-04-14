import React from 'react'
import Input from '../../components/Form/Input'
import Button from '../../components/Form/Button'

const AddEquipment = () => {
	return (
		<form method="POST" action="/adicionar-equipamento">
			<h2>Cadastro de Novo Equipamento</h2>

			<Input id="eqtoName" type="text" text="Nome:" />
			<Input id="eqtoDescription" type="text" text="Descrição:" />

			<Button id="addEqto" text="Cadastrar Equipamento" action="algumaFunction()"/>
		</form>
	);
}

export default AddEquipment