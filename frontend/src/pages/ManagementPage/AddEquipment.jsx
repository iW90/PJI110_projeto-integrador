import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddEquipment = ({ floors }) => {
    const [inputs, setInputs] = useState([{
        id: `instrumentoId-${Date.now()}`,
        instrumentoId: '',
        instrumentoFunc: '',
        ea: '',
        sa: '',
        ed: '',
        sd: '',
        instrumentoName: '',
        quantidade: ''
    }]);

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newInputs = [...inputs];
        newInputs[index][name] = value;
        setInputs(newInputs);
    };

    const handleAddInput = () => {
        setInputs([...inputs, {
            id: `instrumentoId-${Date.now()}`,
            instrumentoId: '',
            instrumentoFunc: '',
            ea: '',
            sa: '',
            ed: '',
            sd: '',
            instrumentoName: '',
            quantidade: ''
        }]);
    };

    const handleRemoveInput = index => {
        if (index === 0) return; // Prevent removing the initial line
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        setInputs(newInputs);
    };

    return (
        <form id="dynamicForm" action="/adicionar-equipamento" method="POST">
            <h2>Cadastro de Novo Equipamento</h2>
            <div className='dados'>
                <label htmlFor="disciplina">Disciplina</label>
                <select id="disciplina" name="disciplina" required>
                    <option value="" disabled defaultValue>Selecione uma disciplina</option>
                    <option value="eletrica">Elétrica</option>
                    <option value="hidraulica">Hidráulica</option>
                    <option value="hvac">HVAC</option>
                </select>

                <br /><br />

                <label htmlFor="pavimentos">Pavimento</label>
                <select id="pavimentos" name="pavimentos" required>
                    <option value="" disabled defaultValue>Selecione um pavimento</option>
                    {floors && floors.map((floor, index) => (
                        <option key={index} value={floor.id}>
                            {floor.name}
                        </option>
                    ))}
                </select>

                <br /><br />

                <label htmlFor="controladora">Controladora</label>
                <input id="controladora" name="controladora" required />

                <br /><br />
            </div>

            <div className="instrumento-container">
                <label> </label>
                <label>ID</label>
                <label>Descrição</label>
                <label>EA</label>
                <label>SA</label>
                <label>ED</label>
                <label>SD</label>
                <label>Instrumento</label>
                <label>Qtd</label>
                <button type="button" onClick={handleAddInput} className="add-instrumento">
                    <i className="fas fa-plus"></i>
                </button>
            </div>


            {inputs.map((input, index) => (
                <div key={index} className="instrumento-line">
					<input
						type="text"
						name="invisibleInput"
						style={{
							opacity: 0, // Make it transparent
							overflow: 'hidden', // Hide any overflowing content
						}}
						value="Some value"
						onChange={event => handleInputChange(index, event)}
					/>
                    <input
                        type="text"
                        name="instrumentoId"
                        value={input.instrumentoId}
                        onChange={event => handleInputChange(index, event)}
                        required
                    />
                    <input
                        type="text"
                        name="instrumentoFunc"
                        value={input.instrumentoFunc}
                        onChange={event => handleInputChange(index, event)}
                        required
                    />
                    <input
                        type="text"
                        name="ea"
                        value={input.ea}
                        onChange={event => handleInputChange(index, event)}
                    />
                    <input
                        type="text"
                        name="sa"
                        value={input.sa}
                        onChange={event => handleInputChange(index, event)}
                    />
                    <input
                        type="text"
                        name="ed"
                        value={input.ed}
                        onChange={event => handleInputChange(index, event)}
                    />
                    <input
                        type="text"
                        name="sd"
                        value={input.sd}
                        onChange={event => handleInputChange(index, event)}
                    />
                    <input
                        type="text"
                        name="instrumentoName"
                        value={input.instrumentoName}
                        onChange={event => handleInputChange(index, event)}
                        required
                    />
                    <input
                        type="text"
                        name="quantidade"
                        value={input.quantidade}
                        onChange={event => handleInputChange(index, event)}
                    />
                    {index !== 0 && (
                        <button type="button" onClick={() => handleRemoveInput(index)} className="delete-instrumento">
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    )}
                </div>
            ))}

            <br /><br />

            <button type="submit">Add Equipamento</button>
        </form>
    );
};

AddEquipment.propTypes = {
    floors: PropTypes.array.isRequired
};

export default AddEquipment;
