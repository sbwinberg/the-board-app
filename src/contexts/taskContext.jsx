import { createContext, useEffect, useState } from "react";
import { statuses, tasks as initialTasks } from "../utils/tasks";

export const TaskContext = createContext()

export function TaskProvider({ children }){
    const [tasks, setTasks] = useState(initialTasks) //initialTasks || []
    const [show, setShow] = useState(false);

    // Gör kolumner efter vad det finns för status ('todo', 'in-progress', 'done')
    // Flytta ut kolumner till state för att lätt kunna lägga till kolumner och tasks
    const [columns, setColumns] = useState([])

    // UPPDATERA TASKS I KOLUMNERNA
    // Iterera över statuses(Kolumner) och plocka ut tasks med motsvarande status
    // Dependency att uppdateras när tasks uppdateras
    useEffect(() => {
        setColumns(statuses.map((status) => {
            const tasksInColumn = tasks.filter(task => task.status === status.title)
            return {
                title: status.title,
                tasks: tasksInColumn,
                id: status.id
            }
        }))
    }, [tasks])
     
    return(
        <TaskContext.Provider value={{tasks, setTasks, columns, setColumns, show, setShow}}>
            {children}
        </TaskContext.Provider>
    )
}