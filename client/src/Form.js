import {useState} from 'react';
import './Form.css';

function Form({ onAddTask }){
    const [value, setValue] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:8000/add",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({task: value})
        })
        .then(response => response.json())
        .then(data => {
            onAddTask(data);
            setValue('');
        });
    }

    function handleChange(e){
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
                <input type="text" value={value} onInput={handleChange}></input>
                <input type="submit" value="Add"></input>
        </form>
    );
}

export default Form;