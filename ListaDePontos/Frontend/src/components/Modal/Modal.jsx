import React from 'react';
import Modal from 'react-modal';

function Modal({ isOpen, closeModal, content }) {
	return (
		<Modal isOpen={isOpen} onRequestClose={closeModal}>
			{content}
		</Modal>
	);
}

export default Modal