import React from 'react'

function Input({ id, type, text }) {
	return (
		<label htmlFor={id}>
			<p>{text}</p>
			<input type={type} id={id} name={id} placeholder="" />
		</label>
	);
}

export default Input