// import React, { useState } from 'react';
// import Modal from 'react-modal';

// function ModalNewPointList({ isOpen, children, close, newPointList }) {
// 	if (!isOpen) return null;

// 	const [taskText, setTaskText] = useState('');

// 	const handleAddTask = () => {
// 		addTask(taskText);
// 		setTaskText('');
// 		closeModal();
// 	  };


// 	return (
// 		<Modal isOpen={isOpen} onRequestClose={closeModal}>
// 		  <h2>Adicionar Tarefa</h2>
// 		  <input
// 			type="text"
// 			value={taskText}
// 			onChange={(e) => setTaskText(e.target.value)}
// 			placeholder="Digite sua tarefa"
// 		  />
// 		  <button onClick={handleAddTask}>Adicionar</button>
// 		  <button onClick={closeModal}>Fechar</button>
// 		</Modal>
// 	  );
// 	};


// 	return (
// 		<div className="modal">
// 			<div className="modal-content">
// 				{children}
// 				<button onClick={close}> x </button>
// 			</div>
// 		</div>
// 	);
// }

// export default ModalNewPointList;
