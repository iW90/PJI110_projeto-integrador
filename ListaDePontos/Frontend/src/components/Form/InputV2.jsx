import React from 'react';

function InputV2({ id, type, text, value, onChange }) {
	return (
		<label htmlFor={id}>
			<p>{text}</p>
			<input type={type} id={id} name={id} placeholder="" required value={value} onChange={onChange} />
		</label>
	);
}

export default InputV2;
