import React from 'react';
import Input from '../../components/Form/Input';

function FormInstrument() {
	return (
		<form>
			<p></p>
			<Input id="it" type="text" text="Nome do Instrumento:" value="" onChange="" />
			<Input id="ea" type="number" text="Total de Entradas Analógicas:" value="" onChange="" />
			<Input id="ed" type="number" text="Total de Entradas Digitais:" value="" onChange="" />
			<Input id="sa" type="number" text="Total de Saídas Analógicas:" value="" onChange="" />
			<Input id="sd" type="number" text="Total de Saídas Digitais:" value="" onChange="" />
			<hr></hr>
		</form>
	);
}

export default FormInstrument;