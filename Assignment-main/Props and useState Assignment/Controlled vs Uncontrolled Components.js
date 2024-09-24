import React, { useState } from 'react';

const TextInput = ({ onValueChange }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        onValueChange(event.target.value);
    };

    return <input type="text" value={value} onChange={handleChange} />;
};

export default TextInput;
