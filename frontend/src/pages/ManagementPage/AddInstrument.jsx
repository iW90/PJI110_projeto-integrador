import React from 'react'
import Input from '../../components/Form/Input'
import Button from '../../components/Form/Button'

const AddInstrument = () => {
	return (
		<form method="POST" action="/adicionar-instrumento">
			<h2>Cadastro de Novo Instrumento</h2>

			<Input id="istoName" type="text" text="Nome:" />
			<Input id="istoAI" type="text" text="Quantidade de Entradas Analógicas:" />
			<Input id="istoAO" type="text" text="Quantidade de Saídas Analógicas:" />
			<Input id="istoDI" type="text" text="Quantidade de Entradas Digitais:" />
			<Input id="istoDO" type="text" text="Quantidade de Saídas Digitais:" />

			<Button id="addIsto" text="Cadastrar Instrumento" action="algumaFunction()"/>
		</form>
	);
}

export default AddInstrument