import React from 'react';

function Form({ handleSubmit, handleChange, inputValue }) {
    return (
        <form className='form' onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new task..."
                value={inputValue}
                onChange={handleChange}
            />
            <button className='add-button' type="submit">Add</button>
        </form>
    );
}

export default Form;