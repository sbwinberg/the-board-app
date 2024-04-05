import { useParams } from "react-router-dom";
import { useContext } from "react"
import { TaskContext } from "../contexts/taskContext";
import Column from "./Column";
import TaskModal from "./TaskModal";


export default function Content() {
    const { columns } = useContext(TaskContext);
    
    // Använder /:key för att se om URLen matchar någon kolumn
    // Om det finns en match renderas bara den kolumnen ut, annars alla
    const key = useParams();
    const chosenColumn = columns.filter(column => key.key === column.title)

    return (
        <main>
            {chosenColumn.length ? (
                    chosenColumn.map(column => <Column key={column.id} column={column} />)
                ) : (                    
                columns.map(column => (<Column key={column.id} column={column}/>))
            )}
            <TaskModal />
        </main>
    )
}