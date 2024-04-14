import React from 'react'
import Input from '../../components/Form/Input'
import Button from '../../components/Form/Button'

const AltInstrument = () => {
	return (
		<form method="PUT" action="/alterar-instrumento">
			<h2>Alteração de Instrumento Cadastrado</h2>

			<Input id="deviceId" type="text" text="Id:" />
			<Input id="deviceName" type="text" text="Nome:" />
			<Input id="deviceDescription" type="text" text="Descrição:" />
			<Input id="deviceAI" type="text" text="Quantidade de Entradas Analógicas:" />
			<Input id="deviceAO" type="text" text="Quantidade de Saídas Analógicas:" />
			<Input id="deviceDI" type="text" text="Quantidade de Entradas Digitais:" />
			<Input id="deviceDO" type="text" text="Quantidade de Saídas Digitais:" />

			<Button id="addDevice" text="Alterar Instrumento" action="algumaFunction()"/>
		</form>
	);
}

export default AltInstrument