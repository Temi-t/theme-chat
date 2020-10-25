import React from 'react';

export default function NewTask({ newTask, handleChange, handleSubmit }) {
    return(
        <form onSubmit={handleSubmit}>
            <input placeholder='New Theme here'
            autoComplete="off"
            name="title"
            value={newTask.title || ''}
            onChange={handleChange} />

            {!newTask.title ? null : (
                <>
                    <textarea 
                    placeholder="Adding theme..."
                    name="description"
                    value={newTask.description || ''}
                    onChange={handleChange} />

                    <button type='submit'>Add Theme </button>
                </>
            )}
        </form>
    );
};