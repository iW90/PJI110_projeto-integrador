import React from 'react'
import Input from '../../components/Form/Input'
import Button from '../../components/Form/Button'

const InstrumentById = () => {
	return (
		<form method="GET" action="/buscar-instrumento-id">
			<h2>Busca de Instrumento pelo ID</h2>

			<Input id="deviceId" type="text" text="Id do Instrumento:" />

			<Button id="addDevice" text="Buscar Instrumento" action="algumaFunction()"/>
		</form>
	);
}

export default InstrumentById