import { useState } from "react"
import { statuses, tasks as initialTasks} from "../utils/tasks";
import Task from "./Task";
import TaskModal from "./TaskModal";

export default function Content() {
    // const [todo, setTodo] = useState([]);
    const [tasks, setTasks] = useState(initialTasks) //initialTasks || 

    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const timedate = new Date().toLocaleDateString();
    //     const id = todo.length ? todo[todo.length - 1].id + 1 : 1;
    //     const newTask = {
    //         id: id,
    //         title, 
    //         description,
    //         date: timedate
    //     }
    //     const allTasks = [...todo, newTask]
    //     setTodo(allTasks);
    //     setTitle('');
    //     setDescription('');
    // }
    
    // const handleDelete = (id) => {
    //     const filteredList = todo.filter(task => task.id !== id);
    //     setTodo(filteredList)
    // }




    const columns = statuses.map((status) => {
        const tasksInColumn = tasks.filter(task => task.status === status)
        return {
            title: status,
            tasks: tasksInColumn
        }
    })

    const updateTask = (task) => {
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
        <main>
            {columns.map((column) => (
                <div 
                    className="column" 
                    key={column.title}
                    onDrop={(e) => handleDrop(e, column.title)}
                    onDragOver={(e) => e.preventDefault()}
                >
                    <h2 className="column__title">{column.title}</h2>
                    <div className="task__container">
                        {column.tasks.map((task) => (
                            <Task 
                                task={task} 
                                key={task.id}
                                tasks={tasks}
                                setTasks={setTasks}
                            />
                        ))}
                    </div>
                    {column.title === 'todo' && <TaskModal tasks={tasks} setTasks={setTasks} />}
                </div>
            ))}
        </main>
    )
}