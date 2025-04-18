import React from 'react';

function Task({ task, handleDelete }) {
    return (
        <div className="task">
            <input
                type='checkbox'
            />
            <label>{task.name}</label>
            <button className='delete-button' onClick={handleDelete}></button>
        </div>
    );
}

export default Task;