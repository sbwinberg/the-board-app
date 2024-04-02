import { createContext, useState } from "react";
import { tasks as initialTasks } from "../utils/tasks";

export const TaskContext = createContext()

export function TaskProvider({ children }){
    const [tasks, setTasks] = useState(initialTasks) //initialTasks || []

    return(
        <TaskContext.Provider value={{tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    )
}