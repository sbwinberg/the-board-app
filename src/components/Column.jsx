import { useContext } from "react";
import { TaskContext } from "../contexts/taskContext";
import { Link } from "react-router-dom";
import Task from "./Task";
import AddModal from "./AddModal"
import '../css/Column.css'

export default function Column({column}) {
    const {tasks, setTasks} = useContext(TaskContext)

    // UPPDATERA TASK VID DROP
    // Hämta id som skickas med i dataTransfer
    // Hitta rätt task i tasks-staten
    // Om någon task matchar
    // Uppdatera taskens status till kolumnens namn
    // Byt ut gamla tasken mot den uppdaterade
    // Uppdatera tasks-state
    const handleDrop = (e, status) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('id');
        const task = tasks.find((task) => task.id == id)
        if(task) {
            const newTask = {...task, status}
            const updatedTasks = tasks.map((t) => {
                return t.id === newTask.id ? newTask :  t
            })
            setTasks(updatedTasks);
        }
    }

    return (
        <div>
            <div
                className="column"
                key={column.id} 
                onDrop={(e) => handleDrop(e, column.title)} 
                onDragOver={(e) => e.preventDefault()}
            >
                <Link to={'/' + column.title} className="column__link">
                    <div className="title__container">
                        <h2 className={`column__title ${column.title}`}>{column.title}</h2>
                    </div>
                </Link>
                <div className="task__container">
                    {column.tasks.map(task => (<Task task={task} key={task.id}/>))}
                </div>
                {column.id === 1 && <AddModal />}
            </div>
        </div>
    )
}