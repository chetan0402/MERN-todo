import React, { useState,useEffect} from 'react';
import "./TaskList.css";

function TaskList(){
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/getAll",{
            method:"POST"
        })
        .then(res => res.json())
        .then(data => {
            setTasks(data);
        });
    }, []);

    function handleClick(id){
        fetch("http://localhost:8000/delete",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: id})
        })
        .then(() => {
            setTasks(tasks.filter(task => task._id !== id));
        });
    }

    return (
        <div>
            <h1>Task List</h1>
            {tasks.map((task) => {
                return  <div key={task._id} className='taskContainer'>
                            <button className='taskButton' onClick={()=>{handleClick(task._id)}}></button><p className='task'>{task.task}</p>
                        </div>
            })}
        </div>
    );
}

export default TaskList;