import { createContext, useState } from "react";
import { statuses, tasks as initialTasks } from "../utils/tasks";

export const TaskContext = createContext()

export function TaskProvider({ children }){
    const [tasks, setTasks] = useState(initialTasks) //initialTasks || []

    // Gör kolumner efter vad det finns för status ('todo', 'in-progress', 'done')
    // Flytta ut kolumner till state för att lätt kunna lägga till kolumner och tasks
    const columns = statuses.map((status) => {
        const tasksInColumn = tasks.filter(task => task.status === status)
        return {
            title: status,
            tasks: tasksInColumn
        }
    }) 

    return(
        <TaskContext.Provider value={{tasks, setTasks, columns}}>
            {children}
        </TaskContext.Provider>
    )
}