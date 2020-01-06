import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [tech, setTech] = useState([]);
    const [inputText, setInputText] = useState('');
    const handleAdd = () => {
        setTech([...tech, inputText]);
        setInputText('');
    };

    useEffect(() => {
        const localStoreTeches = localStorage.getItem('techs');
        if (localStoreTeches) {
            setTech(JSON.parse(localStoreTeches));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('techs', JSON.stringify(tech));
    }, [tech]);

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
