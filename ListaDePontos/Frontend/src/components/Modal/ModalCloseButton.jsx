import React from 'react';

function ModalCloseButton({ id, text, action }) {
	return (
		<button className="closeModal" onClick={action}>Fechar</button>
	);
}

export default ModalCloseButton;