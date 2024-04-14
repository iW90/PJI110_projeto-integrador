import React from 'react'
import Input from '../../components/Form/Input'
import Button from '../../components/Form/Button'

const InstrumentByName = () => {
	return (
		<form method="GET" action="/buscar-instrumento-name">
			<h2>Busca de Instrumento pelo Nome</h2>

			<Input id="deviceId" type="text" text="Nome do Instrumento:" />

			<Button id="addDevice" text="Buscar Instrumento" action="algumaFunction()"/>
		</form>
	);
}

export default InstrumentByName