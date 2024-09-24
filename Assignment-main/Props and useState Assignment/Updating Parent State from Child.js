import React, { useState } from 'react';

const ColorPicker = ({ onColorChange }) => {
    const [color, setColor] = useState('red');

    const handleColorChange = (event) => {
        const newColor = event.target.value;
        setColor(newColor);
        onColorChange(newColor);
    };

    return (
        <div>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );
};

export default ColorPicker;
