import { useContext } from "react";
import { TaskContext } from "../contexts/taskContext";
import { Link, useParams } from "react-router-dom";
import Task from "./Task";
import TaskModal from "./TaskModal"

export default function Column({column, columns}) {
    const {tasks, setTasks} = useContext(TaskContext)
    
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
    const keys = useParams();
    const chosenColumn = columns.filter(column => column.title === keys)
    console.log(columns)

    return (
        <div>
            {chosenColumn ? (
                <p>There is no bathroom</p>
            ) : ( 
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
                        {column.tasks.map(task => <Task task={task} key={task.id}/>)}
                    </div>
                    {column.title === 'todo' && <TaskModal tasks={tasks} setTasks={setTasks} />}
                </div>
            )}
        </div>
        // <div 
        // className="column" 
        // key={column.title}
        // onDrop={(e) => handleDrop(e, column.title)}
        // onDragOver={(e) => e.preventDefault()}
        // >
        //     <Link to={'/' + column.title}>
        //         <h2 className="column__title">{column.title}</h2>
        //     </Link>
        //     <div className="task__container">
        //         {column.tasks.map(task => <Task task={task} key={task.id}/>)}
        //     </div>
        //     {column.title === 'todo' && <TaskModal tasks={tasks} setTasks={setTasks} />}
        // </div>
    )
}