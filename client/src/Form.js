import {useState} from 'react';

function Form(){
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
    }

    function handleChange(e){
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
                <input type="text" value={value} onInput={handleChange}></input>
                <submit></submit>
        </form>
    );
}

export default Form;