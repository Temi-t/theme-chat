import React from 'react';

export default function NewTask({ newTask, handleChange, handleSubmit }) {
    return(
        <form onSubmit={handleSubmit}>
            <input placeholder='New Task here'
            name="title"
            value={newTask.title || ''}
            onChange={handleChange} />

            {!newTask.title ? null : (
                <>
                    <textarea 
                    placeholder="Filling details..."
                    name="description"
                    value={newTask.description || ''}
                    onChange={handleChange} />

                    <button type='submit'>Add task </button>
                </>
            )}
        </form>
    );
};