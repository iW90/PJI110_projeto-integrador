import React from 'react';
import Button from '../../components/Form/Button';

function Floor({ floorNumber, addEqpto }) {
	return (
		<div>
			<h3>Pavimento {floorNumber}</h3>
			<div class="pavement-content">
				<form>
					<h4>Elétrica</h4>
					<Button id="addEqpto" text="Adicionar Equipamento" action={addEqpto} />
				</form>
				<form>
					<h4>Hidráulica</h4>
					<Button id="addEqpto" text="Adicionar Equipamento" action={addEqpto} />
				</form>
				<form>
					<h4>HVAC</h4>
					<Button id="addEqpto" text="Adicionar Equipamento" action={addEqpto} />
				</form>
			</div>
		</div>
	);
}

export default Floor;