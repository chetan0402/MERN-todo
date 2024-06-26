import Form from './Form';
import TaskList from './TaskList';

function Main(){
    return (
        <div>
            <div>
                <h1>Enter a task</h1>
            </div>
            <Form/>
            <TaskList/>
        </div>
    );
}

export default Main;