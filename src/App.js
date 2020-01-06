import React, { useState } from 'react';
import './App.css';

function App() {
    const [tech, setTech] = useState(['ReactJs', 'React Native']);
    const [inputText, setInputText] = useState('');
    const handleAdd = () => {
        setTech([...tech, inputText]);
        setInputText('');
    };

    const handleChange = e => {
        setInputText(e.target.value);
    };

    return (
        <>
            <ul>
                {tech.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
            <input type="text" onChange={handleChange} value={inputText} />
            <button type="button" onClick={handleAdd}>
                Add
            </button>
        </>
    );
}

export default App;
