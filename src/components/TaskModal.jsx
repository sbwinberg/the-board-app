import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../contexts/taskContext";
import { useParams } from 'react-router-dom';

export default function TaskModal({handleClose, show, setShow}) {
    const { id } = useParams();
    const [taskData, setTaskData] = useState(null);

    useEffect(() => {
        const task = tasks.find((task) => id == task.id)
        setTaskData(task)
        setShow(true)
    }, [id])

    // States och funktioner för beskrivning, titel och editing
    const { tasks, setTasks } = useContext(TaskContext)
    const [description, setDescription] = useState(null);
    const [title, setTitle] = useState(null);
    const [isEditing, setIsEditing] = useState(false)
    const handleEdit = () => {
        setIsEditing(prev => !prev)
    }

    // Filtrera arrayen med tasks och ta bort task med rätt id
    // Uppdatera state
    const handleDelete = (id) => {
        const remainingTasks = tasks.filter((task) => task.id !== id);
        setTasks(remainingTasks);
        handleClose()
    }

    // Skapa ett objekt med ny titel/beskrivning
    // Hitta rätt task i statet och byt ut mot nya objektet (i en ny array)
    // Uppdatera state med nya arrayen
    // Stäng redigeringen
    const handleSave = () => {
        const updatedTask = {...taskData, description, title}
        const updatedTasks = tasks.map((t) => {
            return t.id === updatedTask.id ? updatedTask :  t
        })
        setTasks(updatedTasks);
        handleEdit();
    }

    // {/* Inställningar för att visa/gömma modalen, bara gå att stänga med knappen och esc */}
    // {/* Conditional redering om redigering är igång eller inte */}
    return (
        <>
        {taskData && (    
            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <p>{taskData.status}</p>
                        {isEditing ? (
                        <input 
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        ) : (
                        <h2>{taskData.title}</h2>
                        )}
                        <p>{taskData.date}</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {isEditing ? (
                        <input 
                        type="text" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
                    ) : (
                        <div>{taskData.description}</div> 
                    )}
                </Modal.Body>
                <Modal.Footer>
                    {isEditing ? (
                        <Button variant="secondary" onClick={handleSave}>Spara</Button>
                    ) : (
                        <Button variant="secondary" onClick={handleEdit}>Redigera</Button>
                    )}
                    <Button variant="primary" type='delete' onClick={() => handleDelete(taskData.id)}>Radera uppgiften</Button>
                </Modal.Footer>
            </Modal>
        )}
        </>
    )
}