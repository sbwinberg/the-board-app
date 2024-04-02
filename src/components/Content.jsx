import { useContext } from "react"
import { statuses } from "../utils/tasks";
import { TaskContext } from "../contexts/taskContext";
import Column from "./Column";


export default function Content() {
    const { tasks } = useContext(TaskContext);

    // Gör kolumner efter vad det finns för status ('todo', 'in-progress', 'done')
    // Flytta ut kolumner till state för att lätt kunna lägga till kolumner och tasks
    const columns = statuses.map((status) => {
        const tasksInColumn = tasks.filter(task => task.status === status)
        return {
            title: status,
            tasks: tasksInColumn
        }
    }) 

    return (
        <main>
            {columns.map(column => <Column key={column.title} column={column} columns={columns}/>)}
        </main>
    )
}