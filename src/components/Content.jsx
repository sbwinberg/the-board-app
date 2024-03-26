import { useState } from "react"
import { DragDropContext } from "react-beautiful-dnd";

import Task from "./Task"
import Column from "./Column"
import NewTaskModal from "./NewTaskModal";

export default function Content() {
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todo')) || []);
    const [doing, setDoing] = useState([]);
    const [done, setDone] = useState([]);
    const [isOpen, setIsOpen] = useState(false);


    return (
        <main>
            <Column title={'Todo'}>
                {todoList.map(task => <Task title={task.name} date={task.date} key={task.name} /> )}
                <NewTaskModal todo={todo} setTodo={setTodo}/>
            </Column>
            <Column title={'Doing'}>      
            </Column>
            <Column title={'Done'}>
            </Column>
        </main>
    )
}