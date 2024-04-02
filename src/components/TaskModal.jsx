import { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlus } from 'react-icons/fa'
import { TaskContext } from "../contexts/taskContext";


const TaskModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {tasks, setTasks} = useContext(TaskContext)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
        const timedate = new Date().toLocaleDateString();
        const newTask = {
            id,
            title,
            description,
            status: 'todo',
            date: timedate
        }
        setTasks([...tasks, newTask]);
        setTitle('');
        setDescription('');
        handleClose();
    }

  return (
    <>
        {/* Visas i kolumnen */}
        <button className="button__add" onClick={handleShow}>
            <FaPlus />
            Lägg till en Todo!
        </button>

      {/* Visas bara när modalen är öppen */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Lägg till uppgift</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="modal__form" className="modal__form">
            <label htmlFor="modal__name">Namn på uppgift:</label>
            <input 
                id="modal__name"
                type="text" 
                placeholder="Task name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="modal__description">Uppgiftsbeskrivning:</label>
            <textarea 
                id="modal__description"
                placeholder="Beskriv uppgiften"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Stäng</Button>
            <Button variant="primary" type='submit' form="modal__form" onClick={handleSubmit}>Lägg till</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TaskModal
