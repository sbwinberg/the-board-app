import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlus } from 'react-icons/fa';


export default function TaskModal({ tasks, setTasks }) {
  // State och funktioner för modalen
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // States för att hålla koll på titel och beskrivning
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Funktion för att lägga till ny task
  // Förhindra reload
  // Ge unikt ID och dagens datum
  // Skapa ny task och uppdatera state
  // Nollställ state för titel och beskrivning
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = tasks.length ? tasks[tasks.length - 1] + 1 : 1
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
  }

  return (
    <>
      {/* Knapp som visas i kolumnen */}
      <button className="button__add" onClick={handleShow}>
        <FaPlus className='add__icon'/>
        Skapa ny uppgift
      </button>

      {/* Modal för att lägga till task */}
      {/* Inställningar för att visa/gömma modalen, bara gå att stänga med knappen och esc */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Lägg till en uppgift</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='modal__form' id='modal__form' onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor="task-name">Namn: </label>
              <input 
                type="text" 
                id="task-name" 
                placeholder='Namn på uppgift...' 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <label htmlFor="task-description">Beskrivning: </label>
              <textarea 
                type="text" 
                id="task-description" 
                placeholder='Uppgiftsbeskrivning...' 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                ></textarea>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type='submit' form='modal__form' onClick={handleClose}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
