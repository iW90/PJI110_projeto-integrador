import React from 'react'
import Input from '../../components/Form/Input'
import Button from '../../components/Form/Button'

const DelInstrument = () => {
	return (
		<form method="DEL" action="/deletar-instrumento">
			<h2>Remoção de Instrumento Cadastrado</h2>

			<Input id="istoId" type="text" text="Id do Instrumento: " />

			<Button id="delIsto" text="Deletar Instrumento" action="algumaFunction()"/>
		</form>
	);
}

export default DelInstrument