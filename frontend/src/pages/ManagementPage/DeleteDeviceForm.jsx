import React from 'react'

const DeleteDeviceForm = () => {
	return (
		<form method="DELETE" action="/delete-device">
			<h2>Exclusão de Dispositivo Cadastrado</h2>

			<Input id="deviceId" type="text" text="Id:" />

			<Button id="addDevice" text="Cadastrar Dispositivo" action="algumaFunction()"/>
		</form>
	);
}

export default DeleteDeviceForm