import React from 'react';

function CloseModal({ id, text, action }) {
	return (
		<button className="closeModal" onClick={action}>Fechar</button>
	);
}

export default CloseModal;