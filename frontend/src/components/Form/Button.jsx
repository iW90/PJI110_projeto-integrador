import React from 'react';

function Button(id, text, action) {
	return (
		<button id={id} onClick={action}>xxx</button>
	);
}

function Button2(id, text, action) {
	return (
		<button id={id} onClick={action}>{text}</button>
	);
}

export default Button;