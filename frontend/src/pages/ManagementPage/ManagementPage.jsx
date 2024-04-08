import React from 'react';
import AddDeviceForm from './AddDeviceForm';
import DeleteDeviceForm from './DeleteDeviceForm';
import UpdateDeviceForm from './UpdateDeviceForm';

function	ManagementPage() {
	const [selectedAction, setSelectedAction] = useState('');

	const handleActionChange = (e) => {
		setSelectedAction(e.target.value);
	};

	let component;

	switch (selectedAction) {
	case 'register':
		component = <AddDeviceForm />;
		break;
	case 'delete':
		component = <DeleteDeviceForm />;
		break;
	case 'change':
		component = <UpdateDeviceForm />;
		break;
	default:
		component = null;
	}

	return (
		<div>

			<label htmlFor="managementDeviceActions">
				Selecione a ação desejada:
				<select id="managementDeviceActions" name="managementDeviceActions" onChange={handleActionChange}>
					<option value="" disabled selected>Default</option>
					<option value="register">Cadastrar</option>
					<option value="delete">Excluir</option>
					<option value="change">Alterar</option>
				</select>
			</label>

			{component}
		</div>
	);
}

export default ManagementPage;