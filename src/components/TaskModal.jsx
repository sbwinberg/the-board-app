import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../contexts/taskContext";
import { useParams, useNavigate } from 'react-router-dom';
import '../css/TaskModal.css'

export default function TaskModal() {
    // Hämta in states från context
    // Lokalt state för matchande tasks (taskData)
    // Lokalt state för redigeringsläge
    // ID från url med useParams
    // useNavigate för att kunna navigera till startsidan när modalen stängs ner
    const { tasks, setTasks, show, setShow } = useContext(TaskContext)
    const [taskData, setTaskData] = useState(null);
    const [isEditing, setIsEditing] = useState(false)
    const { id } = useParams();
    const navigate = useNavigate();


    // SÄTT RÄTT TASK TILL RÄTT URL
    // URL sätts till '/task/:id' där ':id' är taskens id
    // Hitta igen matchande task i tasks-state
    // Sätt matchande task till lokal taskData-state
    // Öppna modalen
    // Dependency på params (id)
    useEffect(() => {
        const task = tasks.find((task) => id == task.id)
        setTaskData(task)
        setShow(true)
    }, [id])



    // STÄNG MODAL
    // Navigera till startsidan
    // Stäng av redigeringsläge
    // Nollställ task data(Överflödigt kanske då det ändå inte används innan params ändras/modalen öppnas igen)
    const handleClose = () => {
        setShow(false)
        navigate('/')
        setIsEditing(false)
        setTaskData('')
    };

    // TA BORT TASK
    // Parametern är den öppna modalens(taskens) id
    // Filtrera tasks-state mot detta id
    // Uppdatera state
    // Stäng modalen
    const handleDelete = (id) => {
        const remainingTasks = tasks.filter((task) => task.id !== id);
        setTasks(remainingTasks);
        handleClose()
    }

    // UPPDATERA TASK
    // Gå igenom tasks-state och byt ut den som matchar id med taskData mot taskData
    // (detta objekt innehåller den nya titeln och beskrivningen om något ändrats)
    // Uppdatera state med nya arrayen
    // Stäng redigeringen
    const handleSave = () => {
        const updatedTasks = tasks.map((task) => {
            return task.id === taskData.id ? taskData :  task
        })
        setTasks(updatedTasks);
        setIsEditing(false)
    }

    return (
        //  {/* Inställningar för att visa/gömma modalen, bara gå att stänga med knappen och esc */}
        //  {/* Conditional redering om redigering är igång eller inte */}
        <>
        {taskData && (    
            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={true}
            >
                <Modal.Header closeButton className='modal__header'>
                    <Modal.Title>
                        <p className={`modal__status ${taskData.status}`}>{taskData.status}</p>
                        {isEditing ? (
                        <input 
                            type="text"
                            value={taskData.title}
                            onChange={(e) => setTaskData({...taskData, title: e.target.value})}
                            required
                            className='title__input modal__title'
                        />
                        ) : (
                        <h2 className='modal__title'>{taskData.title}</h2>
                        )}
                        <p className='modal__date'>{taskData.date}</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {isEditing ? (
                        <textarea 
                        className='modal__description'
                        type="text" 
                        value={taskData.description}
                        onChange={(e) => setTaskData({...taskData, description: e.target.value})}
                        />
                    ) : (
                        <div className='modal__description'>{taskData.description}</div> 
                    )}
                </Modal.Body>
                <Modal.Footer>
                    {isEditing ? (
                        <Button variant="secondary" onClick={handleSave}>Spara</Button>
                    ) : (
                        <Button variant="secondary" onClick={() => setIsEditing(true)}>Redigera</Button>
                    )}
                    <Button variant="primary" type='delete' style={{backgroundColor: '#f08080', border: 'none'}} onClick={() => handleDelete(taskData.id)}>Radera uppgiften</Button>
                </Modal.Footer>
            </Modal>
        )}
        </>
    )
}