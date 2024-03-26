import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlus } from 'react-icons/fa';

export default function TaskModal({todo, setTodo}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Save submitted data in task object
  // Update todo-list state via props function
  // Save todo-list to LS
  const handleSubmit = (e) => {
    e.preventDefault();

    const taskObject = {
      name: e.target[0].value,
      description: e.target[1].value,
      date: new Date().toLocaleDateString()
    }
    const newTodoList = [...todo, taskObject];
    setTodo(newTodo);
    localStorage.setItem('todo', JSON.stringify(newTodoList));
  }

// Inputs are uncontrolled components since no information is needed before submitted
// Modal imported from react-bootstrap library
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
          <form className='modal__form' id='modal__form' onSubmit={handleSubmit}>
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
          <Button variant="primary" type='submit' form='modal__form' onClick={handleClose}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const reactElementWithJSX = <p>Här kommer lite ball text</p>
const reactElementWithoutJSX = React.createElement('p', null, 'Här står lite mer ball text')