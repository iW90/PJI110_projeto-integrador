import React from 'react'
import Button from './Button';
import Input from './Input';

const SearchForm = (id, text) => {
	return (
		<form>
			<Input id={id} type="text" text={text} />

			<Button id="searchDevice" text="Buscar Dispositivo" action="algumaFunction()"/>
		</form>
	);
}

export default SearchForm