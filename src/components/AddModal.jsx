import { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlus } from 'react-icons/fa'
import { TaskContext } from "../contexts/taskContext";
import '../css/AddModal.css'


const AddModal = () => {
  const {tasks, setTasks} = useContext(TaskContext)

    // Lokalt state för att hålla reda på denna modal
    const [showAddModal, setShowAddModal] = useState(false);
    const handleClose = () => setShowAddModal(false);
    const handleShow = () => setShowAddModal(true);

    // States för kontrollerade komponenter i min form
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // SKAPAR EN NY TASK
    // Förhindrar omladdning av sidan
    // Ger unikt id genom att ta ID av sista tasken i arrayen och lägger till 1
    // Eftersom alla tasks lägger till 1 och läggs till i slutet av tasks-arrayen säkerställs det att idn är i storleksordning
    // Lägger till dagens datum
    // Skapar ett objekt med id, titel, beskrivning, status(kolumn) och datum
    // Lägger till det nya objektet i slutet av tasks-arrayen
    // Nollställer states som håller koll på titel och beskrivning
    // Stänger modalen
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
            <FaPlus className="add__icon"/>
            Lägg till en Todo!
        </button>

      {/* Visas bara när modalen är öppen */}
      <Modal
        show={showAddModal}
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
                required
                id="modal__name"
                type="text" 
                placeholder="Namn på uppgiften"
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

export default AddModal
