import { useState } from "react"
import Task from "./Task"
import Column from "./Column"
import TaskModal from "./TaskModal";

export default function Content() {
    const [todo, setTodo] = useState([]);
    const [doing, setDoing] = useState([]);
    const [done, setDone] = useState([]);
    const [isOpen, setIsOpen] = useState(false);


    return (
        <main>
            <Column title={'Todo'} button={true} setIsOpen={setIsOpen} isOpen={isOpen}>
                {todo.map(task => <Task title={task.title} date={task.date} key={task.title} /> )}
                <TaskModal />
            </Column>
            <Column title={'Doing'} setTodo={setTodo}>      
                {doing.map(task => <Task title={task.title} date={task.date} key={task.title} /> )}
            </Column>
            <Column title={'Done'} setTodo={setTodo}>
                {doing.map(task => <Task title={task.title} date={task.date} key={task.title} /> )}
            </Column>
        </main>
    )
}