import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react"
import { TaskContext } from "../contexts/taskContext";
import Column from "./Column";
import TaskModal from "./TaskModal";


export default function Content() {
    const { columns } = useContext(TaskContext);
    const key = useParams();
    const chosenColumn = columns.filter(column => key.key === column.title)

    // States och funktioner för modal
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        navigate('/')
    };

    return (
        <main>
            {chosenColumn.length ? (
                    chosenColumn.map(column => <Column key={column.title} setShow={setShow} column={column} />)
                ) : (                    
                    columns.map(column => <Column key={column.title} setShow={setShow} column={column}/>)
            )}
            <TaskModal handleClose={handleClose} setShow={setShow} show={show}/>
        </main>
    )
}