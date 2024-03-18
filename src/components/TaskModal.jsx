import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlus } from 'react-icons/fa';


export default function TaskModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="button__add" onClick={handleShow}>
                <FaPlus className='add__icon'/>
                Skapa ny uppgift
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Lägg till en uppgift</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='modal__form'>
              <label htmlFor="task-name">Namn: </label>
              <input type="text" id="task-name" placeholder='Namn på uppgift...'/>

              <label htmlFor="task-description">Beskrivning: </label>
              <input type="text" id="task-description" placeholder='Uppgiftsbeskrivning...'/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
