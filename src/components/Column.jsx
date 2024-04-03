import { useContext } from "react";
import { TaskContext } from "../contexts/taskContext";
import { Link, useNavigate} from "react-router-dom";
import Task from "./Task";
import AddModal from "./AddModal"

export default function Column({column, setShow}) {
    const {tasks, setTasks} = useContext(TaskContext)

    const navigate = useNavigate();
    
    const handleShow = (task) => {
        setShow(true)
        navigate('/task/' + task.id)
    };

    function updateTask(task) {
        const updatedTasks = tasks.map((t) => {
            return t.id === task.id ? task :  t
        })
        setTasks(updatedTasks);
    }

    
    const handleDrop = (e, status) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('id');
        const task = tasks.find((task) => task.id == id)
        if(task) {
            updateTask({...task, status})
        }
    }

    return (
        <div>
            <div
                className="column"
                key={column.title} 
                onDrop={(e) => handleDrop(e, column.title)} 
                onDragOver={(e) => e.preventDefault()}
            >
                <Link to={'/' + column.title}>
                    <h2 className="column__title">{column.title}</h2>
                </Link>
                <div className="task__container">
                    {column.tasks.map(task => (
                    <Task 
                        task={task} 
                        handleShow={handleShow}
                        key={task.id}
                    />
                    ))}
                </div>
                {column.title === 'todo' && <AddModal tasks={tasks} setTasks={setTasks} />}
            </div>
        </div>
    )
}