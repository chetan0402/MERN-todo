import Form from './Form';
import TaskList from './TaskList';
import {useState, useEffect} from 'react';

function Main(){
    const [tasks, setTasks] = useState([]);
    const addTask = (task) => {
        setTasks([...tasks, task]);
    }
    useEffect(() => {
        fetch("http://localhost:8000/getAll",{
            method:"POST"
        })
        .then(res => res.json())
        .then(data => {
            setTasks(data);
        });
    }, []);
    return (
        <div>
            <div>
                <h1>Enter a task</h1>
            </div>
            <Form onAddTask={addTask}/>
            <TaskList tasks={tasks} setTasks={setTasks}/>
        </div>
    );
}

export default Main;