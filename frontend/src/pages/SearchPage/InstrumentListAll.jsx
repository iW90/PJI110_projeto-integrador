import React from 'react'
import Button from '../../components/Form/Button'

const InstrumentListAll = () => {
	return (
		<form method="GET" action="/buscar-instrumentos">
			<h2>Lista todos os Instrumentos Cadastrados</h2>

			<Button id="getAllIsto" text="Buscar Instrumentos" action="algumaFunction()"/>
		</form>
	);
}

export default InstrumentListAll