import { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TaskContext } from "../contexts/taskContext";

const Task = ({task}) => {
  // States och funktioner för modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // States och funktioner för beskrivning, titel och editing
  const { tasks, setTasks } = useContext(TaskContext)
  const [description, setDescription] = useState(task.description);
  const [title, setTitle] = useState(task.title);
  const [isEditing, setIsEditing] = useState(false)
  const handleEdit = () => {
    setIsEditing(prev => !prev)
  }

  // Filtrera arrayen med tasks och ta bort task med rätt id
  // Uppdatera state
  const handleDelete = (id) => {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  }

  // Skapa ett objekt med ny titel/beskrivning
  // Hitta rätt task i statet och byt ut mot nya objektet (i en ny array)
  // Uppdatera state med nya arrayen
  // Stäng redigeringen
  const handleSave = () => {
    const updatedTask = {...task, description, title}
    const updatedTasks = tasks.map((t) => {
        return t.id === updatedTask.id ? updatedTask :  t
    })
    setTasks(updatedTasks);
    handleEdit();
  }

  return (

    <>
    {/* Task som visas */}
    {/* Gör varje task draggable, skicka med taskens ID och visa modul på klick */}
      <div 
        className="task" 
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData('id', task.id)
        }}
        onClick={handleShow}
      >
        <h2 className="task__title">{task.title}</h2>
        <h3 className="task__date">{task.date}</h3>
      </div>

    {/* Modal för varje task */}
    {/* Inställningar för att visa/gömma modalen, bara gå att stänga med knappen och esc */}
    {/* Conditional redering om redigering är igång eller inte */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <p>{task.status}</p>
            {isEditing ? (
              <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              <h2>{task.title}</h2>
            )}
            
            <p>{task.date}</p>
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
            <div>{task.description}</div> 
          )}
        </Modal.Body>
        <Modal.Footer>
          {isEditing ? (
            <Button variant="secondary" onClick={handleSave}>Spara</Button>
          ) : (
            <Button variant="secondary" onClick={handleEdit}>Redigera</Button>
          )}
          <Button variant="primary" type='delete' onClick={() => handleDelete(task.id)}>Radera uppgiften</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Task
