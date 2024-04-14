import React from 'react';

function Modal({ open, children, onClose }) {
	if (!open) return null;

	return (
		<div className="modal">
			<div className="modal-content">
				{children}
				<button onClick={onClose}> x </button>
			</div>
		</div>
	);
}

export default Modal;
