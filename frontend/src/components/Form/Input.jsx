import React from 'react'

function Input(id, type, text) {
	return (
		<label htmlFor={id}>{text}
			<input type={type} id={id} name={id} placeholder="" />
		</label>
	);
}

export default Input