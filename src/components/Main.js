import React, { useState, useEffect } from 'react';
import '../assets/Main.css';
import Pet from '../assets/images/pet.gif';
import Button from '../components/Button';

function Main() {
    const [name, setName] = useState("");
    const [inputValue, setInputValue] = useState("");

    const handleNameChange = (event) => {
        setInputValue(event.target.value);
        console.log(setInputValue(event.target.value));
    }

    const handleSubmitButton = (event) => {
        event.preventDefault();
        setName(inputValue);
        setInputValue("");
        localStorage.setItem('name', JSON.stringify(inputValue));
    }

    useEffect(() => {
        const storedName = JSON.parse(localStorage.getItem('name'));
        if (storedName) {
            setName(storedName);
        }
    }, []);

    return (
        <>
            <div className='container'>
                <h1 className='tracking-in-contract-bck'>Hi! I am: {name}</h1>
                <form onSubmit={handleSubmitButton}>
                    <div className='petContainer'>
                        <img src={Pet} alt="pet" />
                    </div>
                    <input type='text' value={inputValue} onChange={handleNameChange} placeholder='Pet Name:' />
                    <Button />
                </form>
            </div>
        </>
    )
}

export default Main;
