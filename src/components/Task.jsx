// import { Link } from "react-router-dom";
// import TaskModal from "./TaskModal";

const Task = ({task, handleShow}) => {
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
        onClick={() => handleShow(task)}
      >
        <h2 className="task__title">{task.title}</h2>
        <h3 className="task__date">{task.date}</h3>
      </div>

      {/* Modal för varje task */}
      {/* <TaskModal task={task} handleClose={handleClose} show={show} setShow={setShow}/> */}
    </>
  )
}

export default Task
