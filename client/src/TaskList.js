import React, { useState,useEffect} from 'react';

function TaskList(){
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/getAll")
        .then(res => res.json())
        .then(data => {
            setTasks(data);
        });
    }, []);
    return (
        <div>
            <h1>Task List</h1>
            {tasks.map((task) => {
                <div key={task._id} className='taskContainer'>
                    <button className='taskButton'></button><p className='task'>{task.task}</p>
                </div>
            })}
        </div>
    );
}

export default TaskList;