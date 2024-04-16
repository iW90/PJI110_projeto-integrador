import React from 'react'
import Input from '../../components/Form/Input'
import Button from '../../components/Form/Button'

const AltInstrument = () => {
	return (
		<form method="PUT" action="/alterar-instrumento">
			<h2>Alteração de Instrumento Cadastrado</h2>

			<Input id="istoId" type="text" text="Id:" />
			<Input id="istoName" type="text" text="Nome:" />
			<Input id="istoAI" type="text" text="Entradas Analógicas:" />
			<Input id="istoAO" type="text" text="Saídas Analógicas:" />
			<Input id="istoDI" type="text" text="Entradas Digitais:" />
			<Input id="istoDO" type="text" text="Saídas Digitais:" />

			<Button id="altIsto" text="Alterar Instrumento" action="algumaFunction()"/>
		</form>
	);
}

export default AltInstrument