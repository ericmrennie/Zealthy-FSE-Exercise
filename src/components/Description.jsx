import React from 'react';

export default function Description({ handleInputChange, value }) {
    return (
            <textarea
                className='description-input'
                id="descriptionInput"
                name="description"
                placeholder="What can I help you with?"
                value={value}
                onChange={handleInputChange}
                style={{ 
                    padding: '7px', 
                    borderRadius: '10px',
                    margin: '0 auto',
                    marginBottom: '15px',
                    border: '1px outset #000'
                }}
            />
    );
}
